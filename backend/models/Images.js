const { Schema, model } = require('mongoose');

const imagesSchema = new Schema({
    image: Image,
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model('Locations', imagesSchema);