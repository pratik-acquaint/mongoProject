const express = require("express");
const Router = express.Router();
const { checkAuth } = require("../middleware/authMiddleware");

//controller
const productController = require("../controller/productController");

//Prodcut-routes
Router.post("/add", checkAuth, productController.addProduct);

//exporting Routers
module.exports = Router;
