const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const { Schema, model } = mongoose;

const ItinerarySchema = new Schema({
    id: {
        type: Number
    },
    line_objectId: {
        type: Schema.Types.ObjectId,
        ref: 'Line'
    },
    line_id: {
        type: Number,
        required: true
    },
    line_code: {
        type: String,
        required: true
    },
    line_name: {
        type: String,
        required: true
    },
    itineraries: [
        {
            lat: {
                type: String,
                required: true
            },
            lng: {
                type: String,
                required: true
            },
        }
    ]
}, {
    timestamps: true //createdAt e updatedAt sao criadas automaticamente
});

ItinerarySchema.plugin(AutoIncrement, { id:'itinerary_id', inc_field: 'id' });

module.exports = model('Itinerary', ItinerarySchema);  