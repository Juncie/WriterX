const { Schema, model } = require("mongoose");

const NovelSchema = new Schema({
  novel: String,
  author: String,
  plots: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Novel", NovelSchema);
