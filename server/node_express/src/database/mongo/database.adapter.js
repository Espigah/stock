export default (url, adapter) => {
    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;

    var db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', function () {
        console.log('Conectado ao MongoDB.')
    });


    return {
        connect: () => {
            return mongoose.connect(url, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                })
                .then(() => {
                    console.log("[] Successfully connected to the database");
                    return Promise.resolve(mongoose);
                })
                .catch(err => {
                    console.log('[ ERROR ] Could not connect to the database. Exiting now...', err);
                    return Promise.reject(err);
                });
        },
        disconnect: () => {
            if (!mongoose) {
                return
            }
            return mongoose.disconnect();
        }
    }
}