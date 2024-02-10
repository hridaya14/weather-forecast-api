const express = require('express');
const {connectDb} = require("./config/dbConfig");
connectDb();
const { errorHandler } = require("./middleware/errorHandler");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');


app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use(cookieParser());

app.use("/user",require('./routes/userRoutes'));
app.use("/current",require('./routes/currentRoutes'));
app.use("/forecast",require('./routes/forecastRoutes'));
app.use("/history",require('./routes/historyRoutes'));


const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on port ${port}`));
