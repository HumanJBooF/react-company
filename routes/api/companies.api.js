const router = require("express").Router();
const { middleware } = require('../../config/jwt.config');
const { seedDb, getAllCompanyData, findOneAndUpdate } = require('../../controllers/companies.controller');

// @routes all routes start at /api/company
router.get('/seed', seedDb);
router.get('/', middleware, getAllCompanyData);
router.post('/:name/edit', middleware, findOneAndUpdate);

module.exports = router;