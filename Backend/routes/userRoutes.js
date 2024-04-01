const express = require("express");
const router = express.Router();
const {registerUser,getUser , loginUser} = require("../controllers/userController.js");


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/getUsername").get(getUser)


module.exports = router;