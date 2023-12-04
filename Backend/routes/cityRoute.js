const express = require("express");
const router = express.Router()
const {getCity} = require("../controllers/cityController");

router.get("/",getCity)



module.exports = router; 