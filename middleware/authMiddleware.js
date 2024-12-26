const Joi = require("joi");
const jwtToken = require("jsonwebtoken");
require("dotenv").config();
const jwt = require("jsonwebtoken");


const checkAuth = (req, res, next) => {
  try {
    // console.log("request---------->", req.headers);

    // Extract token from the Authorization header
    const authHeader = req.headers.token;
    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "auth token is required" });
    }
    const token = authHeader;
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    // console.log("Decoded Token:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

const registerSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().min(18).max(100).required(),
  gender: Joi.number().required(),
  userType: Joi.string().valid("customer", "user", "admin").required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
});

const loginSchema = Joi.object({
  userType: Joi.string().valid("customer", "user", "admin").required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

module.exports = { checkAuth, registerSchema, loginSchema };
