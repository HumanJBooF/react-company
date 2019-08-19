const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const app = express();

const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(routes);

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));