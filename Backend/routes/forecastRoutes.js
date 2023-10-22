const express = require("express");
const router = express.Router()
const {getForecastWeather} = require("../controllers/forecastController");

router.route("/").get(getForecastWeather);

module.exports = router;