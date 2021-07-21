const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    userName: { type: Schema.Types.ObjectId, ref: 'User' }
    post: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model('Post', postSchema);