const express = require("express");
const Router = express.Router();

//Routes
const authRoutes = require("./authRoute");
const productRoutes = require("./productRoute");
const cartRoutes = require("./cartRoute");

//routes
Router.use("/auth", authRoutes);
Router.use("/product", productRoutes);
Router.use("/cart", cartRoutes);
module.exports = Router;
