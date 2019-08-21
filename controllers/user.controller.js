const User = require('../models/User');
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('../config/jwt.config');


const userController = {
    // @route POST api/users/register
    registerUser: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exist' }] })
            } else {
                user = new User({ name, email, password });

                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(password, salt);

                await user.save();
                const payload = {
                    user: {
                        id: user.id
                    }
                };

                jwt.signToken(payload, res)
            }

        } catch (err) {
            console.log(err.message);
            return res.status(500).send("Server error");
        }
    }
}

module.exports = userController;