const express = require("express");
const router = express.Router()
const {getForecastWeather} = require("../controllers/forecastController");
const { tokenAuthenticator } = require("../middleware/tokenAuthenticator");

router.route("/").get(tokenAuthenticator,getForecastWeather);

module.exports = router;