const asynchandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const tokenAuthenticator = asynchandler((req, res, next) => {
    
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        res.status(401);
        throw new Error("Unauthorized");
    }

    

    jwt.verify(token, process.env.JWT_SECRET, (error) => {
        if (error) {
            res.status(401);
            throw new Error("Unauthorized");
        }
        next();
    })

});

module.exports = {tokenAuthenticator};