const express = require('express');
const {connectDb} = require("./config/dbConfig");
connectDb();
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorHandler");



const app = express();
app.use(express.json());
app.use("/current",require('./routes/currentRoutes'));
app.use("/forecast",require('./routes/forecastRoutes'));
app.use("/history",require('./routes/historyRoutes'));
app.use("/user",require('./routes/userRoutes'));
app.use(errorHandler);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on port ${port}`));