const express = require("express");
const Router = express.Router();

//controller
const authController = require("../controller/authController");

//auth-routes
Router.post( "/register", authController.register);
Router.post("/login", authController.login);


//exporting Routers
module.exports = Router;
