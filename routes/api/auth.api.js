const router = require("express").Router();
const validation = require('../../validation/validation');
const { validateToken, loginUser } = require('../../controllers/auth.controller');
const { middleware } = require('../../config/jwt.config');

// @routes all routes start at /api/auth
router.get('/', middleware, validateToken);
router.post('/login', [validation.authenticateUser], loginUser);

module.exports = router;