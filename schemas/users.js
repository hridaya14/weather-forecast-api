const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
    },
    email:{
        type: String,
        required: [true, "Email is required"],
    },
    password:{
        type: String,
        required: [true, "Please add the contact phone number"],
    }},
    {timestamps : true}
);