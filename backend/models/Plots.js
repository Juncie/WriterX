const { Schema, model } = require("mongoose");

const plotsSchema = new Schema({
  title: String,
  characters: [String],
  summary: String,
  chapterId: { type: Schema.Types.ObjectId, ref: "Chapter" },
});

module.exports = model("Plot", plotsSchema);
