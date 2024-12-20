const authSerivece = require("../services/auth");
//middleware
const { registerSchema, loginSchema } = require("../middleware/authMiddleware");
const bcrypt = require("bcrypt");
const jwtToken = require("jsonwebtoken");

require('dotenv').config()

const register = async (req, res) => {
  try {
    // console.log("request body--------->", req.body);
    let { email, userType } = req.body;

    const checkValidation = await registerSchema.validate(req.body);
    if (checkValidation.error) {
      return res.status(401).json({
        message: checkValidation.error.message,
      });
    }

    let existUser = await authSerivece.checkUserbyEmail(email, userType);
    console.log("existuser------>", existUser);

    if (existUser.checkUser !== null) {
      return res.status(409).json({
        message: "User already Exist",
      });
    }

    let createUser = await authSerivece.registerService(req.body);

    return res.status(200).json({
      message: "user created succesffully",
      res: createUser,
    });
  } catch (error) {
    console.log("error in register controller------->", error);
  }
};

const login = async (req, res) => {
  try {
    // console.log("request body--------->", req.body);
    let { email, password, userType } = req.body;

    const checkValidation = await loginSchema.validate(req.body);
    if (checkValidation.error) {
      return res.status(401).json({
        message: checkValidation.error.message,
      });
    }

    let checkUser = await authSerivece.checkUserbyEmail(email, userType);
    if (checkUser.checkUser === null) {
      return res.status(400).json({
        message: "User  Not Found",
      });
    }

    let comparePassword = await bcrypt.compare(
      password,
      checkUser.checkUser.password
    );
    if (!comparePassword) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }
    const tokenPayload = {
      userId: checkUser.checkUser._id,
      userType: checkUser.checkUser.userType,
      emailId: checkUser.checkUser.email,
    };
    const secretKey = "asdasdwedasczxcsed2342342daswefr";
    const token = jwtToken.sign(tokenPayload, secretKey, { expiresIn: "1h" });

    return res.status(200).json({
      message: "User Login Successfully",
      res: checkUser.checkUser,
      token,
    });
  } catch (error) {
    console.log("Error in Login Controller------->", error);
  }
};

module.exports = { register, login };
