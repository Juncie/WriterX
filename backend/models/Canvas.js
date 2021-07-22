const { Schema, model } = require('mongoose');

const canvasSchema = new Schema({
    article: String 
})

module.exports = model('Canvas', canvasSchema);