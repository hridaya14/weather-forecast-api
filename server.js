const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorHandler");



app.use(express.json());
app.use("/current",require('./routes/currentRoutes'));  //defines the route for the current weather
app.use(errorHandler);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on port ${port}`));