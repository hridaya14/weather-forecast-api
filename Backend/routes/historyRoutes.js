const express = require("express");
const router = express.Router();
const {getHistory} = require("../controllers/historyController");
const { tokenAuthenticator } = require("../middleware/tokenAuthenticator");

router.route("/").get(tokenAuthenticator,getHistory);

module.exports = router;