import PouchDB from 'pouchdb-node';

export default (url, adapter) => {
    let client;
    return {
        getClient() {
            return client;
        },
        connect: () => {
            client = new PouchDB(url, {
                skip_setup:false, //Initially PouchDB checks if the database exists, and tries to create it, if it does not exist yet. Set this to true to skip this setup.
                fetch: function (url, opts) {
                    opts.headers.set('X-node', 'node');
                    return PouchDB.fetch(url, opts);
                }
            });

            return client.info();
        },
        disconnect: () => {
            return client.close();
        }
    }
}