const { Schema, model } = require("mongoose");

const chaptersSchema = new Schema({
  title: String,
  chapter: String,
  article: String,
  description: String,
  novelId: { type: Schema.Types.ObjectId, ref: "Novel" },
  userId: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = model("Chapter", chaptersSchema);
