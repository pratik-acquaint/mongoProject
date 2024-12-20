const bcrypt = require("bcrypt");
const productModel = require("../model/productModel");

const Addproduct = async (userData) => {
  try {
    const { name, productImage, type, expirydate } = userData;

    const product = new productModel({
      name,
      productImage,
      type,
      expirydate,
    });
    // Save the user to the database
    let data = await product.save();
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.log("error in Add Product service", error);
  }
};

const checkProductbyName = async (name) => {
  try {
    let data = await productModel.find(
      {
        name: { $regex: namePattern, $options: "i" },
        isDeleted: 0,
      },
      { name: 1, _id: 0 }
    );

    return {
      data,
    };
  } catch (error) {
    console.log("error in getProductsByName service", error);
  }
};

module.exports = { Addproduct, checkProductbyName };
