const router = require("express").Router();
const validation = require('../../validation/validation');
const { validateToken, authenticateUser } = require('../../controllers/auth.controller');
const { middleware } = require('../../config/jwt.config');

// @routes all routes start at /api/auth
router.get('/', middleware, validateToken);
router.post('/', [validation.authenticateUser], authenticateUser);

module.exports = router;