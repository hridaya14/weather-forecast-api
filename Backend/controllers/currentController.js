const asyncHandler = require("express-async-handler");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();


// @desc get current Weather
// @GET /current
// @access User
const getCurrentWeather = asyncHandler(async (req, res) => {
    const {query} = req.query;
    if (!query) {
        res.status(400);
        throw new Error("Enter a Query");
    }
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${query}`);
    if (!response) {
        res.status(404);
        throw new Error("Weather not found");
    }
    
    const data = {
        "temperature": response.data.current.temp_c,
        "location" : response.data.location.name,
        "country" : response.data.location.country,
        "wind_speed": response.data.current.wind_mph,
        "wind_speed": response.data.current.wind_kph,
        "wind_degree": response.data.current.wind_degree,
        "wind_dir": response.data.current.wind_dir,
        "humidity": response.data.current.humidity,
        "preciptation": response.data.current.precip_in,
        "pressure": response.data.current.pressure_mb,
        "condition": response.data.current.condition.text,
        "logo": response.data.current.condition.icon,
        "feels_like": response.data.current.feelslike_c,
    }
    res.status(200).json(data);
});

module.exports = {getCurrentWeather};