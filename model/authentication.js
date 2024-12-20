const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
      default: null,
    },
    gender: {
      type: Number,
      required: false,
      default: null,
    },
    email: {
      type: String,
      required: [true, "Email must be provided"],
    },
    password: {
      type: String,
      required: [true, "Password must be provided"],
    },
    userType: {
      type: String,
      required: [true, "Missing User Type"],
      enum: ["customer", "user", "admin"],
    },
    isDeleted: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
