//middleware
const { ProductSchema ,updateSchema} = require("../middleware/productMiddleware");
const ProductService = require("../services/product");
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

    if (existProduct.data.length > 0) {
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

const ListProduct = async (req, res) => {
  try {
    let productList = await ProductService.ListAllproduct();
    return res.status(200).json({
      message: "Product List getting succesfully",
      res: productList,
    });
  } catch (error) {
    console.log("error in ListProduct controller------->", error);
  }
};

const delteProduct = async (req, res) => {
  try {
    const paramId = req.params.id;
    console.log("delete Prodcut Params ------>", paramId);

    await ProductService.deleteProduct(paramId);
    return res.status(200).json({
      message: "hard Delete Product succesfully",
    });
  } catch (error) {
    console.log("error in delteProduct controller------->", error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const payload = req.body;

    const checkValidation = await updateSchema.validate(payload);
    if (checkValidation.error) {
      return res.status(401).json({
        message: checkValidation.error.message,
      });
    }
    console.log("delete Prodcut Params ------>", payload);

    let data = await ProductService.updateProduct(payload);
    return res.status(200).json({
      message: "Update Product succesfully",
      // data: data,
    });
  } catch (error) {
    console.log("error in update-Product controller------->", error);
  }
};

module.exports = { addProduct, ListProduct, delteProduct, updateProduct };
