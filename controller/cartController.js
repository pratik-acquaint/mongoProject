//middleware
const { cartSchema, CartSoftdelete } = require("../middleware/cartMiddleware");
const cartService = require("../services/cartService");
require("dotenv").config();

const addCart = async (req, res) => {
  try {
    // console.log("request body--------->", req.body);
    // console.log("request.user--------->", req.user);

    const userId = req.user.userId;
    let payload = req.body;
    payload["userId"] = userId;

    const checkValidation = await cartSchema.validate(payload);
    if (checkValidation.error) {
      return res.status(401).json({
        message: checkValidation.error.message,
      });
    }

    let alreadyExistProductinCart = await cartService.existCart(payload);
    console.log("ExistCart-------------->", alreadyExistProductinCart);
    if (alreadyExistProductinCart.data.length > 0) {
      return res.status(409).json({
        message: "Product is already Added into Cart",
      });
    }

    let createCart = await cartService.AddCart(payload);

    return res.status(200).json({
      message: "Product added in Cart Succesffully",
      res: createCart,
    });
  } catch (error) {
    console.log("error in addCart controller------->", error);
  }
};

const ListCart = async (req, res) => {
  try {
    let userId = req.user.userId;
    let data = await cartService.cartList(userId);
    return res.status(200).json({
      message: "CArt List getting succesfully",
      res: data,
    });
  } catch (error) {
    console.log("error in cartList controller------->", error);
  }
};

const softDelete = async (req, res) => {
  try {
    const payload = req.body;

    const checkValidation = await CartSoftdelete.validate(payload);
    if (checkValidation.error) {
      return res.status(401).json({
        message: checkValidation.error.message,
      });
    }

    // let ExistCart = await cartService.findCartbyId(payload.id);
    // console.log("ExistCartExistCartExistCart----->",ExistCart)
    // if (ExistCart) {
    //   res.status(400).json({
    //     message: "Record Not Found",
    //   });
    //   return;
    // }

    await cartService.softDeleteCart(payload);
    return res.status(200).json({
      message: "Cart Soft deleted succesfully",
    });
  } catch (error) {
    console.log("error insoftDelete controller------->", error);
  }
};

module.exports = { addCart, ListCart, softDelete };
