const User = require('../models/User');
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const signToken = require('../config/jwt.config');


const userController = {
    // @route POST api/users/register
    registerUser: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('here')
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: 'email already exist' })
            } else {
                user = new User({ name, email, password });

                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(password, salt);

                console.log(user, 'user')
                await user.save();
                const payload = {
                    user: {
                        id: user.id
                    }
                };

                signToken(payload, res);
            }

        } catch (err) {
            console.log(err.message);
            return res.status(500).send("Server error");
        }
    },
    // @route POST api/users/login
    loginUser: async (req, res) => {
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
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
}

module.exports = userController;