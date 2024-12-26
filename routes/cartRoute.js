const express = require("express");
const Router = express.Router();
const { checkAuth } = require("../middleware/authMiddleware");

//controller
const cartController = require("../controller/cartController");

//Cart-routes
Router.post("/add", checkAuth, cartController.addCart);
Router.get("/list", checkAuth, cartController.ListCart);
Router.patch("/softdelete", checkAuth, cartController.softDelete);

//exporting Routers
module.exports = Router;
