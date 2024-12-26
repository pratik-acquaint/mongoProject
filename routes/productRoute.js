const express = require("express");
const Router = express.Router();
const { checkAuth } = require("../middleware/authMiddleware");

//controller
const productController = require("../controller/productController");

//Prodcut-routes
Router.post("/add", checkAuth, productController.addProduct);
Router.get("/list", checkAuth, productController.ListProduct);
Router.delete("/delete/:id", checkAuth, productController.delteProduct);
Router.put("/update", checkAuth, productController.updateProduct);

//exporting Routers
module.exports = Router;
