const express = require("express");
const router = express.Router();
const {addUser} = require("../controllers/userController.js");

router.route("/").post(addUser);

module.exports = router;