const Line = require('../schemas/Line');

class LineController {
    constructor() {
        this.update = this.update.bind(this);
    }
    async store (req, res) {
        const { code, name } = req.body;

        const lineExists = await Line.findOne({ code });

        if(lineExists) return this.update({
            ...req,
            params: { id: lineExists.id } 
        }, res);

        await Line.create({
            code,
            name
        }, (err, line) => {
            if(err) res.status(400).json({ error: 'Invalid body sent, Please try again.' });

            return res.json(line);
        });
    }

    async update (req, res) {
        const { id } = req.params;

        if(!id) return res.status(400).json({ error: 'Id param cannot be null. Please try again.' });

        const { code, name } = req.body;

        await Line.updateOne({ id }, { code, name }, (err, callback) => {
            if(err) return res.status(400).json({ error: 'An error has ocurred while trying to update, please try again.' });

            return this.findById(req, res);
        });
    }

    async findAll (req, res) {
        const { name = null } = req.query;

        let query = name
            ? { name: new RegExp(name, "i") }
            : { }; 

        await Line.find(query, (err, result) => {
            if(err) return res.status(400).json({ error: 'An error has ocurred while trying to find lines, please try again.' });

            return res.json(result);
        });
    }

    async findById (req, res) {
        const { id } = req.params;

        await Line.findOne({ id }, (err, line) => {
            if(err) return res.status(400).json({ error: 'An error has ocurred whilte trying to find, please try again.' });

            return res.json(line);
        });
    }

    async deleteById (req, res) {
        const { id } = req.params;

        await Line.deleteOne({ id });

        res.send("Operation successful!");
    }
}


module.exports = new LineController();