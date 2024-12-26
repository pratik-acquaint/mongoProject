const cartModel = require("../model/cartModel");

const AddCart = async (payload) => {
  try {
    const { userId, productId } = payload;

    const cart = new cartModel({
      userId,
      productId,
    });
    // Save
    let data = await cart.save();
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.log("error in Add into cart service", error);
  }
};

const existCart = async (payload) => {
  try {
    let data = await cartModel.find({
      productId: payload.productId,
      userId: payload.userId,
      isDeleted: 0,
    });

    return {
      data,
    };
  } catch (error) {
    console.log("error in checkCart service", error);
  }
};

// const cartList = async (Id) => {
//   try {
//     // let data = await cartModel
//       // .find({
//       //   isDeleted: 0,
//       //   userId: Id,
//       // },{ _id: 1, userId: 1, productId: 1 });

//     let data = await cartModel
//       .find({
//         isDeleted: 0,
//         userId: Id,
//       })
//       .select({ _id: 1, userId: 1, productId: 1 });

//     return {
//       data,
//     };
//   } catch (error) {
//     console.log("error in Cart List service", error);
//   }
// };

// Using LookUp function
const cartList = async (Id) => {
  try {
    let data = await cartModel.aggregate([
      {
        $match: {
          isDeleted: 0,
          userId: Id,
        },
      },
      {
        $lookup: {
          from: "products", // The name of the related collection
          localField: "productId", // The field in the current collection
          foreignField: "_id", // The field in the related collection
          as: "productDetails", // The name of the resulting field
        },
      },
      {
        $project: {
          _id: 1,
          userId: 1,
          productId: 1,
          productDetails: 1, // Include product details in the output
        },
      },
    ]);

    return {
      data,
    };
  } catch (error) {
    console.log("error in Cart List service", error);
  }
};

// const findCartbyId = async (Id) => {
//   try {
//     console.log("soft delete id", Id);
//     let record = await cartModel.findById(Id));
//     console.log("record------->", record);

//     return {
//       record,
//     };
//   } catch (error) {
//     console.log("error in findCartbyId", error);
//   }
// };

const softDeleteCart = async (payload) => {
  console.log("payload---------->", payload);

  try {
    let data = await cartModel.updateOne(
      { _id: payload.id },
      {
        $set: {
          isDeleted: 1,
        },
      }
    );
    return {
      data: data,
    };
  } catch (error) {
    console.log("error in softDeleteCart service", error);
  }
};

module.exports = {
  AddCart,
  cartList,
  // deleteProduct,
  softDeleteCart,
  existCart,
  // findCartbyId,
};
