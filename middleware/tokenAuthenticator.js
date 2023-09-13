const asynchandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const tokenAuthenticator = asynchandler((req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token){
        res.status(401);
        throw new Error('Not authorized to access this route');
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err){
            res.status(401);
            throw new Error('Not authorized to access this route');}
        req.user = user;
        next();
    });
});

module.exports = {tokenAuthenticator};