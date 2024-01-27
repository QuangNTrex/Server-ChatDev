const Chat = require("../models/chat");
const io = require("../socket");

module.exports.getChats = (req, res, next) => {
  Chat.find()
    .populate("userId")
    .then((chats) => {
      return res.send({ result: { chats } });
    });
};

module.exports.postAddChat = (req, res, next) => {
  const userId = req.body.userId;
  const text = req.body.text;

  Chat.create({ text, userId }).then((chat) => {
    Chat.findById(chat._id)
      .populate("userId")
      .then((chat) => {
        io.getIO().emit("newchat", { chat });
        return res.send({ result: { message: true } });
      });
  });
};
