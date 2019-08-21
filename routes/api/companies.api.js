const router = require("express").Router();
const { seedDb, getAllCompanyData, findOneAndUpdate } = require('../../controllers/companies.controller');

// @routes all routes start at /api/company
router.get('/seed', seedDb);
router.get('/', getAllCompanyData);
router.post('/:name/edit', findOneAndUpdate);

module.exports = router;