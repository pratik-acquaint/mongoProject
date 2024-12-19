const express = require("express");
const Router = express.Router();

//controller
const authController = require("./authRoute");

//routes
Router.use("/auth", authController);
module.exports = Router;




