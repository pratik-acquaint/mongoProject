const bcrypt = require("bcrypt");
const productModel = require("../model/productModel");

const Addproduct = async (userData) => {
  try {
    const { name, productImage, type, expirydate,price } = userData;

    const product = new productModel({
      name,
      productImage,
      type,
      expirydate,
      price,
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
    // let data = await productModel
    //   .find(
    //     {
    //       name: { $regex: namePattern, $options: "i" },
    //       isDeleted: 0,
    //     },
    //     { name: 1, _id: 0 }
    //   )
    const lowerCaseName = name.toLowerCase();
    let data = await productModel.find({
      name: { $regex: new RegExp(`^${lowerCaseName}$`, "i") },
      isDeleted: 0,
    });

    return {
      data,
    };
  } catch (error) {
    console.log("error in getProductsByName service", error);
  }
};

const ListAllproduct = async () => {
  try {
    let data = await productModel
      .find({
        isDeleted: 0,
      })
      .sort({
        name: 1,
      })
      .limit(10);

    return {
      data,
    };
  } catch (error) {
    console.log("error in ListAllproduct service", error);
  }
};

const deleteProduct = async (id) => {
  try {
    await productModel.deleteOne({
      _id: id,
    });

    return;
  } catch (error) {
    console.log("error in deleteProduct service", error);
  }
};

const updateProduct = async (payload) => {
  try {
    console.log("payload--------->", payload);
    let data = await productModel.updateOne(
      { _id: payload.id },
      {
        $set: {
          type: payload.type,
          price: payload.price,
        },
      }
    );

    return {
      data: data,
    };
  } catch (error) {
    console.log("error in updateProduct service", error);
  }
};

productModel.findByIdAndUpdate();
module.exports = {
  Addproduct,
  checkProductbyName,
  ListAllproduct,
  deleteProduct,
  updateProduct,
};
