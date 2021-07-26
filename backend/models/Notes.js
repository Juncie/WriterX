const { Schema, model } = require("mongoose");

const notesSchema = new Schema({
  userName: { type: Schema.Types.ObjectId, ref: "User" },
  notes: String,
});

module.exports = model("Notes", notesSchema);
