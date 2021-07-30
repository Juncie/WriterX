const { Schema, model } = require("mongoose");

const NoteSchema = new Schema({
  title: String,
  content: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Note", NoteSchema);
 