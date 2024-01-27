const router = require("express").Router();
const ChatController = require("../controllers/chat");

//  chat/get-chats
router.get("/get-chats", ChatController.getChats);

// chat/add-chat
router.post("/add-chat", ChatController.postAddChat);

module.exports = router;
