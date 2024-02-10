const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const userModel = require("../schemas/users");
const jwt = require("jsonwebtoken");

const registerAdmin = expressAsyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Invalid input");
    }

    const user = await userModel.findOne({ email });

    if (user) {
        res.status(400);
        throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = await userModel.create({
        username,
        email,
        password: hashedPassword,
        isAdmin: true
    });

    res.status(200).json({
        status: "Admin created successfully",
        user: newAdmin
    });
});

const loginAdmin = expressAsyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send("Invalid input");
        throw new Error("Invalid input");
    }

    const user = await userModel.findOne({ email });

    if (!user) {
        res.status(400).send("User does not exist");
        throw new Error("User does not exist");
    }

    const validation = await bcrypt.compare(password, user.password);

    if (!validation) {
        res.status(400).send("Invalid password");
        throw new Error("Invalid password");
    }

    const tokenPayload = {
        email: user.email,
        isAdmin: user.isAdmin
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true, maxAge: 1000000 });

    res.status(200).send("Login successful");
});

const getUser = expressAsyncHandler(async (req, res, next) => {
    const id = req.params.id;

    if (!id) {
        res.status(400);
        throw new Error("Invalid input");
    }

    const user = await userModel.findById(id);

    if (!user) {
        res.status(400);
        throw new Error("User does not exist");
    }

    res.status(200).json({
        status: "User found",
        user
    });
    next();
});

const getAllUsers = expressAsyncHandler(async (req, res, next) => {
    const users = await userModel.find({ isAdmin: false }, { password: 0});
    if (!users) {
        res.status(400);
        throw new Error("No users found");
    }

    res.status(200).json({
        status: "All users",
        users
    });
    next();
});

const deleteUser = expressAsyncHandler(async (req, res, next) => {
    const id = req.body.id;

    if (!id) {
        res.status(400);
        throw new Error("Invalid input");
    }

    const user = await userModel.findByIdAndDelete(id);

    if (!user) {
        res.status(400);
        throw new Error("User does not exist");
    }

    res.status(200).json({
        status: "User deleted",
        user
    });
    next();
});




module.exports = { registerAdmin, loginAdmin , getUser , getAllUsers, deleteUser };
