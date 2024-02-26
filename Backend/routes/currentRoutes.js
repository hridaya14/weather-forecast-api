const express = require("express");
const router = express.Router()
const {getCurrentWeather} = require("../controllers/currentController");
const { tokenAuthenticator } = require("../middleware/tokenAuthenticator");


router.route("/").get(getCurrentWeather)


module.exports = router; 