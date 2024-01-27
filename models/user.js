const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nickName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now(), required: true },
  updatedAt: { type: Date, default: Date.now(), required: true },
});

const Users = mongoose.model("User", UserSchema);

module.exports = Users;
