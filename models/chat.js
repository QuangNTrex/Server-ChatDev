const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  text: { type: String, required: true },
  userId: { type: Schema.ObjectId, required: true, ref: "User" },
  createdAt: { type: Date, default: Date.now(), required: true },
  updatedAt: { type: Date, default: Date.now(), required: true },
  font: { type: String, default: false },
  backgroundColor: { type: String, default: false },
  color: { type: String, default: false },
});

const Chats = mongoose.model("Chat", ChatSchema);

module.exports = Chats;
