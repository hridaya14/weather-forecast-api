const asynchandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const tokenAuthenticator = asynchandler((req, res, next) => {
    if (!req.cookies.token) {
        res.status(401);
        throw new Error("Unauthorized");
    }

    const token = req.cookies.token;

    jwt.verify(token, process.env.JWT_SECRET, (error) => {
        if (error) {
            res.status(401);
            throw new Error("Unauthorized");
        }
        next();
    })

});

module.exports = {tokenAuthenticator};