
const mongoose = require("mongoose");

const ProdcutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    expirydate: {
      type: Date,
      require: true,
    },
    price:{
      type:Number,
      require:true
    },
    isDeleted: {
      type: Number,
      default: 0,
    },
    weight:{
      type:Number,
      require:true
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProdcutSchema);
