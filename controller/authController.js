const authSerivece = require("../services/auth");

const register = async (req, res) => {
  try {
    console.log("request body--------->", req.body);
    let createUser = await authSerivece.registerService(req.body);

    console.log("createUser------>", createUser);

    return res.status(200).json({
      message: "user created succesffully",
      res: createUser,
    });
  } catch (error) {
    console.log("error in register controller------->", error);
  }
};

module.exports = { register };
