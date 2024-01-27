const router = require("express").Router();
const UserController = require("../controllers/user");

//   user/get-user
router.post("/get-user", UserController.getUser);

//   user/add-user
router.post("/add-user", UserController.postAddUser);

module.exports = router;
