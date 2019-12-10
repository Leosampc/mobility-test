const LineModel = require('../models/LineModel');
const ItineraryModel = require('../models/ItineraryModel');

const controller = {
    store: async (req, res) => {
        const { line_id, itineraries } = req.body;

        const line = await controller.checkIfLineExists(line_id);

        if(!line) return res.status(400).json({ error: 'Searched line not exists, please try again.' });

        const itineraryExists = await ItineraryModel.findOne({ line_id });

        if(itineraryExists) {
            itineraries.forEach(itinerary => itineraryExists.itineraries.push(itinerary));
            itineraryExists.save();
            return res.json(itineraryExists);
        }

        const { _id: line_objectId, code: line_code, name: line_name } = line;
        
        await ItineraryModel.create({
            line_objectId,
            line_id,
            line_code,
            line_name,
            itineraries
        }, (err, itinerary) => {
            if(err) res.status(400).json({ error: 'An error has ocurred when trying to create a new itinerary, please try again.' });

            res.json(itinerary);
        });
    },

    update: async (req, res) => {
        const { line_id } = req.params;

        const { itineraries } = req.body;

        const line = await controller.checkIfLineExists(line_id);

        if(!line) return res.status(400).json({ error: 'Searched line not exists, please try again.' });

        const itinerary = await ItineraryModel.findOne({ line_id });

        if(itinerary) {
            const { code, name } = line;

            itinerary.line_code = code;
            itinerary.line_name = name;

            if(itineraries)
                itineraries.forEach(new_itinerary => itinerary.itineraries.push(new_itinerary));

            itinerary.save();
            
            res.json(itinerary);
        } else {
            res.status(404).json({ error: 'Itinerary not found, please try again.' });
        }
    },

    findAll: async (req, res) => {
        const { line_id = null } = req.query;

        const query = line_id
            ? { line_id }
            : { }

        await ItineraryModel.find(query, (err, result) => {
            if(err) return res.status(400).json({ error: 'An error has ocurred while trying to itineraries, please try again.' });

            return res.json(result);
        });
    },

    deleteByLineId: async (req, res) => {
        const { line_id } = req.params;

        await ItineraryModel.deleteOne({ line_id });

        res.send("Operation successful!");
    },

    deleteItinerariesByLineId: async (req, res) => {
        const { line_id } = req.params;

        const { itineraries } = req.body;

        const current_itinerary = await ItineraryModel.findOne({ line_id });

        if(!current_itinerary) return res.status(400).json({ error: "Itinerary not found, please try again." });

        if(!current_itinerary.itineraries) return res.status(200).json({ message: "Operation successful!" });

        await Promise.all([
            itineraries.forEach(async itinerary_to_remove => {
                const index = current_itinerary.itineraries.findIndex(itinerary => {
                    return itinerary_to_remove.lat === itinerary.lat && itinerary_to_remove.lng === itinerary.lng
                })
    
                if(index) current_itinerary.itineraries.splice(index, 1);
            })
        ])

        current_itinerary.save();

        return res.json(current_itinerary);
    },

    checkIfLineExists: async id => {
        const line = await LineModel.findOne({ id });

        return line || null;
    },
}

module.exports = controller;