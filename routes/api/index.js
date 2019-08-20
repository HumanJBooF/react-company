const router = require("express").Router();
const userRoutes = require('./user.api');

router.use('/user', userRoutes);

module.exports = router;