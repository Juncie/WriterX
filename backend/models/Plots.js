const { Schema, model } = require('mongoose');

const plotsSchema = new Schema({
    title: String,
    characters: [String],
    summary: [String],
    novelId: { type: Schema.Types.ObjectId, ref: 'Novels' }
})

module.exports = model('Plots', plotsSchema);