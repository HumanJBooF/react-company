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

module.exports = signToken;