const asyncHandler = require("express-async-handler");
const axios = require("axios");


// @desc get forecast on Weather
// @GET /forecast
// @access User
const getForecastWeather = asyncHandler(async (req, res) => {
    const query = req.query.query;
    if (!query) {
        res.status(400);
        throw new Error("Enter a Query");
    }
    const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=metric&key=${process.env.WEATHER_API_KEY}`);
    if (!response) {
        res.status(404);
        throw new Error("Weather not found");
    }
    res.status(200).json(response.data);
});

module.exports = {getForecastWeather};