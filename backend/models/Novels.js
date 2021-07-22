const { Schema, model } = require("mongoose");

const NovelSchema = new Schema({
  title: String,
  // author: {type: Schema.types.ObjectId, ref:'User'}
});

module.exports = model("Novel", NovelSchema);
