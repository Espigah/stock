let fetch = require('node-fetch');

export default (database) => {
    return {
        ...database,
        create: (product) => {

            return fetch(`${database.url}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }).then(response => {
                return response.json();
            })
        },
        findAll: () => {
            console.log("[ JSON_SERVER::findAll ]")
            return fetch(`${database.url}/products`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log("[ JSON_SERVER::findAll::completed ]")
                return response.json();
            })
        },
        findOne: () => {},
        update: () => {},
        remove: () => {}
    }
}