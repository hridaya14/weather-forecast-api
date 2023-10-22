const express = require("express");
const router = express.Router()
const {getCurrentWeather} = require("../controllers/currentController");

router.route("/").get(getCurrentWeather)


module.exports = router; 