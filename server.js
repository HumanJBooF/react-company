const express = require('express');
const routes = require('./routes');
const connectDB = require('./config/db.config');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to mongo
connectDB();

// If no API routes are hit, send the React app
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Routes
app.use(routes);

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));