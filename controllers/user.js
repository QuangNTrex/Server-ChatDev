const User = require("../models/user");

module.exports.postAddUser = (req, res, next) => {
  const nickName = req.body.nickName;

  User.create({ nickName }).then((user) => {
    return res.send({ result: { user } });
  });
};

module.exports.getUser = (req, res, next) => {
  const userId = req.body.userId;
  User.findById(userId).then((user) => {
    return res.send({ result: { user } });
  });
};
