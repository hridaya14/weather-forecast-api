const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const userModel = require("../schemas/users");
const jwt = require("jsonwebtoken");

const registerUser = expressAsyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Invalid input");
    }

    const user = await userModel.findOne( {email : email});


    if(user) {
        res.status(400);
        throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
      
    const newUser = await userModel.create({
        username : username,
        email : email,
        password : hashedPassword
    });
    
    res.status(200).json(
        {
            Status : "User created successfuly ",
            User : newUser
        }
    );
    

});


const loginUser  = expressAsyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send("Invalid input");
        throw new Error("Invalid input");
    }

    const user = await userModel.findOne ({ email : email});

    if (!user) {
        res.status(400).send("User does not exist");
        throw new Error("User does not exist");
    }
    const validation = await bcrypt.compare(password, user.password);

    if (!validation){
        res.status(400).send("Invalid password");
        throw new Error("Invalid password");
    }

    const token = jwt.sign({email : user.email , password : user.password}, process.env.JWT_SECRET, {expiresIn: "1h"});
    res.cookie("token", token, {httpOnly : true , maxAge : 1000000});


    res.status(200).send({token : token , username : user.username});

});

module.exports = {registerUser , loginUser };



