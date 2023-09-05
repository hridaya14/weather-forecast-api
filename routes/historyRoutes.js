const express = require("express");
const router = express.Router();
const {getHistory} = require("../controllers/historyController");

router.route("/").get(getHistory);

module.exports = router;