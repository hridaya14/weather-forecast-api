const asyncHandler = require("express-async-handler");
const axios = require("axios");
const {dateCheck} = require("../middleware/dateChecker");

const getHistory = asyncHandler(async (req, res) => {
    const date = new Date(`${req.query.dt}`);
    if (!dateCheck('history', date)) {
        res.status(400);
        throw new Error('Invalid date');
    }
    const response = await axios.get(`http://api.weatherapi.com/v1/history.json?key=${process.env.API_KEY}&q=${req.query.query}&dt=${req.query.dt}`);
    if (!response) {
        res.status(404);
        throw new Error("Weather not found");
    }
    res.json(response.data);
});

module.exports = {getHistory};