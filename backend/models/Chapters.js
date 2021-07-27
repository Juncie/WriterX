const { Schema, model } = require("mongoose");

const chaptersSchema = new Schema({
  title: String,
  chapter: String,
  article: String,
  description: String,
  novelId: { type: Schema.Types.ObjectId, ref: "Novel" },
});

module.exports = model("Chapter", chaptersSchema);
