import mongoose from "mongoose";

let mongooseConnection;
export default {
    connect: (url, adapter) => {
        if (mongooseConnection) {
            return mongooseConnection;
        }
       // const mongoose = require('mongoose');
      
        mongoose.Promise = global.Promise;
        return mongooseConnection = mongoose.connect(url, {
                useNewUrlParser: true
            })
            .then(() => {
                console.log("[] Successfully connected to the database");
            })
            .catch(err => {
                mongooseConnection = null;
                console.log('[ ERROR ] Could not connect to the database. Exiting now...', err);
                process.exit();
            });
    }
}