const LineModel = require('../models/LineModel');

const controller = {
    store: async (req, res) => {
        const { code, name } = req.body;

        const lineExists = await LineModel.findOne({ code });

        if(lineExists) return controller.update({
            ...req,
            params: { id: lineExists.id } 
        }, res);

        await LineModel.create({
            code,
            name
        }, (err, line) => {
            if(err) res.status(400).json({ error: 'Invalid body sent, Please try again.' });

            return res.json(line);
        });
    },

    update: async (req, res) => {
        const { id } = req.params;

        if(!id) return res.status(400).json({ error: 'Id param cannot be null. Please try again.' });

        const { code, name } = req.body;

        await LineModel.updateOne({ id }, { code, name }, (err, callback) => {
            if(err) return res.status(400).json({ error: 'An error has ocurred while trying to update, please try again.' });

            return controller.findById(req, res);
        });
    },

    findAll: async (req, res) => {
        const { name = null } = req.query;

        let query = name
            ? { name: new RegExp(name, "i") }
            : { }; 

        await LineModel.find(query, (err, result) => {
            if(err) return res.status(400).json({ error: 'An error has ocurred while trying to find lines, please try again.' });

            return res.json(result);
        });
    },

    findById: async (req, res) => {
        const { id } = req.params;

        await LineModel.findOne({ id }, (err, line) => {
            if(err) return res.status(400).json({ error: 'An error has ocurred whilte trying to find, please try again.' });

            return res.json(line);
        });
    },

    deleteById: async (req, res) => {
        const { id } = req.params;

        await LineModel.deleteOne({ id });

        res.send("Operation successful!");
    }
}

module.exports = controller;