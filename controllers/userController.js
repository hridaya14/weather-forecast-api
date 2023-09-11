const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../schemas/users');
const asyncHandler = require("express-async-handler");


const addUser = asyncHandler (async (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    if (!username || !email || !req.body.password) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = await User.create({
        username,
        email,
        password : hashedPassword
    });
    res.status(201);
    res.json({
        "Username": user.username,
        "Email": user.email,
        "id":   user._id
    })
});

module.exports = { addUser };