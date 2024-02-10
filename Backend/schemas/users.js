const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Name is required"],
        trim : true,
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Please add the password"],
    }},
    {timestamps : true}
);

module.exports = mongoose.model('User', userSchema);



// DB controllers
