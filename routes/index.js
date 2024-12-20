const express = require("express");
const Router = express.Router();

//Routes
const authRoutes = require("./authRoute");
const productRoutes = require("./productRoute")

//routes
Router.use("/auth", authRoutes);
Router.use("/product", productRoutes);
module.exports = Router;




