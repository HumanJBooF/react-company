require('dotenv').config();
const mongoose = require('mongoose');
const dbConfigs = { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false };

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, dbConfigs);

        console.log('Mongo Connected');
    } catch (err) {
        console.log(err.message);

        process.exit(1);
    }
}

module.exports = connectDB;