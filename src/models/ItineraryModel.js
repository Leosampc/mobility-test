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
    location: {
        type: {
            type: String,
            enum: ['MultiPoint'],
            required: true
        },
        coordinates: [
            [
                {
                    type: [Number],
                    required: true,
                    index: '2dsphere'
                }
            ]
        ]
    }
}, {
    timestamps: true //createdAt e updatedAt sao criadas automaticamente
});

ItinerarySchema.index({ location: "2dsphere" });

ItinerarySchema.plugin(AutoIncrement, { id:'itinerary_id', inc_field: 'id' });

module.exports = model('Itinerary', ItinerarySchema);  