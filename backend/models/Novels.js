const { Schema, model } = require("mongoose");

const NovelSchema = new Schema({
  title: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Novel", NovelSchema);
