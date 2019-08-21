const Company = require('../models/Company');
const seeds = require('../seeds/companies');

const companyController = {
    // this is just to easily add the 'companies' data to the db
    seedDb: async () => {
        try {
            await seeds.map(obj => {
                let company = new Company(obj);
                company.save();
            });

        } catch (err) {
            console.log(err)
        }
    },
    getAllCompanyData: async (req, res) => {
        try {
            const companies = await Company.find();
            res.json(companies);
        } catch (err) {
            res.status(500).send('Server Error');
        }
    },
    getOneCompany: async (req, res) => {
        let { name } = req.params;
        name = name.split('-').join(' ');
        try {
            const company = await Company.findOne({ name });
            res.json(company);
        } catch (err) {
            res.status(500).send('Server Error');
        }
    },
    findOneAndUpdate: async (req, res) => {
        let { name } = req.params;
        name = name.split('-').join(' ');
        try {
            const company = await Company.findOneAndUpdate({ name }, req.body, { new: true });
            res.json(company);
        } catch (error) {
            res.status(500).send('Server Error');
        }
    }
};

module.exports = companyController;