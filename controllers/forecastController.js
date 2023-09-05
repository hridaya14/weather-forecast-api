const asyncHandler = require("express-async-handler");
const axios = require("axios");

const getForecastWeather = asyncHandler(async (req, res) => {
    const query = req.query.query;
    const days = req.query.days;
    if (!query) {
        res.status(400);
        throw new Error("Enter a Query");
    }
    const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${query}&days=${days}`);
    if (!response) {
        res.status(404);
        throw new Error("Weather not found");
    }
    res.status(200).json(response.data);
});

module.exports = {getForecastWeather};