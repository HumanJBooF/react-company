const router = require("express").Router();
const userRoutes = require('./user.api');
const authRoutes = require('./auth.api');
const companyRoutes = require('./companies.api');

// @routes /api
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/company', companyRoutes);

module.exports = router;