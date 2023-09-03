const express = require("express");
const router = express.Router()
const {getCurrentWeather} = require("../controllers/currentControllers");

router.route("/").get(getCurrentWeather)


module.exports = router; 