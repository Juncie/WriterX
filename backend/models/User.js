const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: String,
    imageUrl: String,
    googleId: String
})

module.exports = model('User', userSchema);