require('dotenv').config();
const jwt = require('jsonwebtoken');

const signToken = async (payload, res) => {
    try {
        const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 * 24 });
        res.json({ token });
    } catch (err) {
        console.log(err, 'Something went wrong jwt config')
    }
}

const middleware = (req, res, next) => {
    // Get token from header
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token not valid' });
    }
}

module.exports = {
    signToken,
    middleware
};