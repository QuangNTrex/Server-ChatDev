require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const ChatRouter = require("./routers/chat");
const UserRouter = require("./routers/user");

const MONGODB_URI =
  "mongodb+srv://devquangnt:quang212511610@cluster0.aiokdwz.mongodb.net/chatdev?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());

app.use("/chat", ChatRouter);
app.use("/user", UserRouter);

mongoose.connect(MONGODB_URI).then(() => {
  console.log("connected mongodb!");
  const server = app.listen(5000);
  const io = require("./socket").init(server);

  io.on("connection", (socket) => {
    console.log("Client connected");
  });
});
