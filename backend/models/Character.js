const { Schema, model } = require("mongoose");

const characterSchema = new Schema({
    name: String,
    bio: String,
    description: String,
    novelId: { type: Schema.Types.ObjectId, ref: "Novel" },
    userId: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = model("Character", characterSchema);
