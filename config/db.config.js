require('dotenv').config();
const mongoose = require('mongoose');
const dbConfigs = { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false };

let URI;

(process.env.NODE_ENV === 'production')
    ? URI = process.env.MONGO_URI_PROD
    : URI = process.env.MONGO_URI_LOCAL

const connectDB = async () => {
    try {
        await mongoose.connect(URI, dbConfigs);

        console.log('Mongo Connected');
    } catch (err) {
        console.log(err.message);

        process.exit(1);
    }
}

module.exports = connectDB;