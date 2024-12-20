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
    isDeleted: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProdcutSchema);
