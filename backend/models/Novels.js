const { Schema, model } = require("mongoose");

const NovelSchema = new Schema({
  novel: String,
  // author: {type: Schema.types.ObjectId, ref:'User'}
  name: String,
});

module.exports = model("Novel", NovelSchema);
