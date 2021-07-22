const { Schema, model } = require('mongoose');

const scenesSchema = new Schema({
    name: String,
    location: String,
    notes: [String],
    characters: [String],
    summary: String 
})

module.exports = model('Scenes', scenesSchema);