const express = require("express");
const router = express.Router()
const {getCurrentWeather} = require("../controllers/currentController");
const { tokenAuthenticator } = require("../middleware/tokenAuthenticator");


router.route("/").get(tokenAuthenticator,getCurrentWeather)


module.exports = router; 