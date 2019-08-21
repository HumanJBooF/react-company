const mongoose = require('mongoose');

const getCents = num => (num / 100).toFixed(2);
const setCents = str => (parseFloat(str) * 100);

const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    revenue: { type: Number, required: true, get: getCents, set: setCents },
    employee_count: { type: Number, required: true }
});

CompanySchema.set('toJSON', { getters: true });
CompanySchema.set('toObject', { getters: true });

const Company = mongoose.model('company', CompanySchema);

module.exports = Company;