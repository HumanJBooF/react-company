const User = require('../models/User');
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('../config/jwt.config');

const authController = {
    // @route GET /api/auth
    validateToken: async (req, res) => {
        try {
            // getting the user minus the password
            const user = await User.findById(req.user.id).select('-password');
            res.json(user);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    },
    // @route POST api/auth
    authenticateUser: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            if (!user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Invalid Credentials' }] });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Invalid Credentials' }] });
            }

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.signToken(payload, res);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
}

module.exports = authController;