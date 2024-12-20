const ProductService = require("../services/product");
//middleware
const {ProductSchema} = require("../middleware/productMiddleware");
require("dotenv").config();


const addProduct = async (req, res) => {
  try {
    console.log("request body--------->", req.body);
    console.log("request.user--------->", req.user);

    const { name } = req.body;
    const checkValidation = await ProductSchema.validate(req.body);
    if (checkValidation.error) {
      return res.status(401).json({
        message: checkValidation.error.message,
      });
    }

    let existProduct = await ProductService.checkProductbyName(name);
    console.log("existProduct------>", existProduct);

    if (existProduct.data !== null) {
      return res.status(409).json({
        message: "Product is already Added",
      });
    }
    let createProduct = await ProductService.Addproduct(req.body);

    return res.status(200).json({
      message: "Product added Succesffully",
      res: createProduct,
    });
  } catch (error) {
    console.log("error in Product controller------->", error);
  }
};

module.exports = { addProduct };
