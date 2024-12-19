const express = require("express");
const Router = express.Router();

//controller
const authController = require("../controller/authController");

//auth-routes
Router.get("/register", authController.register);

//exporting Routers
module.exports = Router;