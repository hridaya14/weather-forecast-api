const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin  , getAllUsers , getUser , deleteUser } = require("../controllers/adminController.js");
const { isAdmin } = require("../middleware/adminAuth.js");

router.route("/register").post(registerAdmin);
router.route("/login").post(loginAdmin);
router.route("/getAllUsers").get(isAdmin,getAllUsers);
router.route("/getUser/:id").get(isAdmin,getUser);
router.route("/deleteUser").delete(isAdmin,deleteUser);


module.exports = router;