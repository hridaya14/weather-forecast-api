const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../schemas/users');
const asyncHandler = require("express-async-handler");


const addUser = asyncHandler (async (req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
});

module.exports = { addUser };