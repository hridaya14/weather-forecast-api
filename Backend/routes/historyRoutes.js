const express = require("express");
const router = express.Router();
const {getHistory} = require("../controllers/historyController");
const { tokenAuthenticator } = require("../middleware/tokenAuthenticator");

router.route("/").get(getHistory);

module.exports = router;