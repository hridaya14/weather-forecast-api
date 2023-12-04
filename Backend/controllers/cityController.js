const asyncHandler = require("express-async-handler");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

// @desc get city list 
// @GET /city
// @access User

const getCity = asyncHandler(async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            res.status(400).json({ error: "Enter a Query" });
            return;
        }
        
        const config = {
            headers: {
                'X-Api-Key': process.env.CITY_API,
            }
        };
        
        const response = await axios.get(`https://api.api-ninjas.com/v1/city?name=${query}&limit=30`, config);

        console.log('Response:', response.data);
        
        if (!response || !response.data || !response.data.data || response.data.data.length === 0) {
            res.status(404).json({ error: "City not found" });
            return;
        }

        res.status(200).json(response.data.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = { getCity };