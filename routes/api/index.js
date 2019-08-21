const router = require("express").Router();
const userRoutes = require('./user.api');
const authRoutes = require('./auth.api');

// @routes /api

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;