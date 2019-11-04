const {
    promisify
} = require('util');

const KEY = "product_";

export default (database) => {
    return {
        ...database,
        create: (product) => {
            console.log("[REDIS]", product)

            return new Promise((resolve, reject) => {
                try {
                    const id = Date.now();
                    product.idProduct = id;
                    database.getClient().set(KEY + id, JSON.stringify(product), function (error, reply) {
                        if (error) {
                            return reject(error);
                        }
                        resolve(reply);
                    });
                } catch (error) {
                    reject(error);
                }

            })
        },
        findAll: () => {
            console.log("[REDIS]", 'findAll')
            let client = database.getClient();

            const scan = promisify(client.scan).bind(client);
            const mget = promisify(client.mget).bind(client);

            return scan(0, "MATCH", KEY + "*").then(scanHandler).then(mgetHandler);

            function scanHandler(reply) {
                let keys = reply[1];
                return mget(keys);
            }

            function mgetHandler(reply) {
                let values = (reply || []).map((value) => {
                    try {
                        return JSON.parse(value)
                    } catch (error) {
                        return value;
                    }
                })
                return values;
            }

        },
        findOne: () => {},
        update: () => {},
        remove: () => {}
    }
}