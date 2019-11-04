import pgp from 'pg-promise';
const redis = require('redis');
export default (url, adapter) => {
    let client;
    return {
        getClient() {
            return client;
        },
        connect: () => {
            return new Promise((resolve, reject) => {
                try {
                    client = redis.createClient();
                    client.on('connect', function (err) {
                        return resolve();
                    });
                    client.on('error', function (err) {
                        console.log('[ REDIS:ERROR ] ' + err);
                    });

                } catch (error) {
                    return reject(error);
                }
            })

        },
        disconnect: () => {
            try {
                client.quit();
                return Promise.resolve();
            } catch (error) {
                return Promise.reject(error);
            }
        }
    }
}