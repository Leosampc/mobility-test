const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const { Schema, model } = mongoose;

const LineSchema = new Schema({
    id: {
        type: Number
    },
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
}, {
    timestamps: true //createdAt e updatedAt sao criadas automaticamente
});

LineSchema.plugin(AutoIncrement, { id:'order_seq', inc_field: 'id' });

module.exports = model('Line', LineSchema);