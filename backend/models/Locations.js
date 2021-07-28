const { Schema, model } = require('mongoose');

const locationsSchema = new Schema({
    name: String,
    imageUrl: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model('Locations', locationsSchema);