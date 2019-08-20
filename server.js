const express = require('express');
const routes = require('./routes');
const connectDB = require('./config/db.config');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to mongo
connectDB();

// Routes
app.use(routes);

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));