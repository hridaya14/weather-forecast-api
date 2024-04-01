const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const isAdmin = asyncHandler((req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        res.status(401);
        throw new Error('Unauthorized: No token provided');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded.isAdmin) {
            res.status(401);
            throw new Error('Unauthorized: User is not an admin');
        }

        next();
    } catch (error) {
        res.status(401);
        throw new Error('Unauthorized: Invalid token');
    }
});

module.exports = { isAdmin };
