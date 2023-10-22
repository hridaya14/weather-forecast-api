const express = require("express");
const router = express.Router();
const {addUser} = require("../controllers/userController.js");
const {loginUser} = require("../controllers/loginController.js");
router.route("/").post(addUser);
router.route("/login").post(loginUser);


module.exports = router;