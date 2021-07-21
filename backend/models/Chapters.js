const { Schema, model } = require('mongoose');

const chaptersSchema = new Schema({
    title: String,
    chapter: Number,
    article: String,
    description: String
})

module.exports = model('Chapters', chaptersSchema);