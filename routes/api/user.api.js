const router = require("express").Router();
const validation = require('../../validation/validation');
const userController = require('../../controllers/user.controller');

// @routes all routes start at /api/users/

router.post('/register', [validation.registerUser], userController.registerUser);
router.post('/login', [validation.loginUser], userController.loginUser);

module.exports = router;