const asyncHandler = require("express-async-handler");
const axios = require("axios");


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
        "location" : response.data.location.name,
        "country" : response.data.location.country,
        "wind_speed(mph)": response.data.current.wind_mph,
        "wind_speed(kph)": response.data.current.wind_kph,
        "wind_degree": response.data.current.wind_degree,
        "wind_dir": response.data.current.wind_dir,
        "humidity": response.data.current.humidity,
        "preciptation(in)": response.data.current.precip_in,
    }
    res.status(200).json(data);
});

module.exports = {getCurrentWeather};