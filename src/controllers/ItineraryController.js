const Itinerary = require('../schemas/Itinerary');
const Line = require('../schemas/Line');

class ItineraryController {
    constructor() {
        this.store = this.store.bind(this);
        this.update = this.update.bind(this);
    }

    async store (req, res) {
        const { line_id, itineraries } = req.body;

        const line = await this.checkIfLineExists(line_id);

        if(!line) return res.status(400).json({ error: 'Searched line not exists, please try again.' });

        const itineraryExists = await Itinerary.findOne({ line_id });

        if(itineraryExists) {
            itineraries.forEach(itinerary => itineraryExists.location.coordinates.push(itinerary));
            itineraryExists.save();
            return res.json(itineraryExists);
        }

        const { _id: line_objectId, code: line_code, name: line_name } = line;
        
        await Itinerary.create({
            line_objectId,
            line_id,
            line_code,
            line_name,
            location: {
                type: "MultiPoint",
                coordinates: itineraries
            }
        }, (err, itinerary) => {
            if(err) return res.status(400).json({ error: 'An error has ocurred when trying to create a new itinerary, please try again.' });

            return res.json(itinerary);
        });
    }

    async update (req, res) {
        const { line_id } = req.params;

        const { itineraries } = req.body;

        const line = await this.checkIfLineExists(line_id);

        if(!line) return res.status(400).json({ error: 'Searched line not exists, please try again.' });

        const itinerary = await Itinerary.findOne({ line_id });

        if(itinerary) {
            const { code, name } = line;

            itinerary.line_code = code;
            itinerary.line_name = name;

            if(itineraries)
                itineraries.forEach(new_itinerary => itinerary.location.coordinates.push(new_itinerary));  

            itinerary.save();
            
            return res.json(itinerary);
        } else {
            return res.status(404).json({ error: 'Itinerary not found, please try again.' });
        }
    }

    async getItinerariesByLocation (req, res) {
        const { lat, lng, distance } = req.query;

        if(!Number(lat) || !Number(lng) || !Number(distance)) return res.status(400).json({ error: "Query params are invalid, please try again." });
        
        try {
            const itineraries = await Itinerary.find({
                location: {
                    $near: {
                        $maxDistance: distance * 1000,
                        $geometry: {
                            type: "MultiPoint",
                            coordinates: [ lat, lng ]
                        }
                    }
                }
            });

            const lines = itineraries.length
                ? itineraries.map(itinerary => {
                    const { line_id, line_code, line_name } = itinerary;
                    return {
                        id: line_id,
                        code: line_code,
                        name: line_name
                    };
                })
                : [];

            return res.json(lines);    
        } catch (err) {
            return res.status(400).json({ error: "An error has ocurred, please try again." });
        }
    }

    async findAll (req, res) {
        const { line_id = null } = req.query;

        const query = line_id
            ? { line_id }
            : { }

        await Itinerary.find(query, (err, result) => {
            if(err) return res.status(400).json({ error: 'An error has ocurred while trying to itineraries, please try again.' });

            return res.json(result);
        });
    }

    async deleteByLineId (req, res) {
        const { line_id } = req.params;

        await Itinerary.deleteOne({ line_id });

        return res.send("Operation successful!");
    }

    async deleteItinerariesByLineId (req, res) {
        const { line_id } = req.params;

        const { itineraries } = req.body;

        const current_itinerary = await Itinerary.findOne({ line_id });

        if(!current_itinerary) return res.status(400).json({ error: "Itinerary not found, please try again." });

        if(!current_itinerary.location) return res.status(200).json({ message: "Operation successful!" });

        await Promise.all([
            itineraries.forEach(async itinerary_to_remove => {
                const index = current_itinerary.location.coordinates.findIndex(itinerary => {
                    return itinerary_to_remove === itinerary
                })
    
                if(index) current_itinerary.location.coordinates.splice(index, 1);
            })
        ])

        current_itinerary.save();

        return res.json(current_itinerary);
    }

    async checkIfLineExists (id) {
        const line = await Line.findOne({ id });

        return line || null;
    }
}

module.exports = new ItineraryController();