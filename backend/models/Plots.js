const { Schema, model } = require('mongoose');

const plotsSchema = new Schema({
    title: String,
    characters: [String],
    description: [String],
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model('Plots', plotsSchema);