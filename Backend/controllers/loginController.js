const asyncHandler = require("express-async-handler");
const User = require("../schemas/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const loginUser = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({email: req.body.email});
    if (!user) {
        res.status(400);
        throw new Error("User not found");
    }
    try{
    const check = await bcrypt.compare(req.body.password, user.password);
    if (check){
        res.status(200);
        const token = jwt.sign({username:user.username, id: user.id} ,process.env.ACCESS_TOKEN_SECRET);
        res.json({token: token});
    }
    else{
        res.status(401);
        throw new Error("Invalid password");
    }}
    catch(err){
        res.status(500);
        console.log(err);
    }
    next();
});
module.exports = {loginUser};