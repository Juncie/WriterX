const { Schema, model } = require('mongoose');

const charactersSchema = new Schema({
    name: String,
    age: Number,
    imageUrl: String,
    bio: [String],
    description: { height: Number, eyeColor: String, weight: Number },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model('Characters', charactersSchema);