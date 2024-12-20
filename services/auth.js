const bcrypt = require("bcrypt");
const UserModel = require("../model/authentication");

const registerService = async (userData) => {
  try {
    const { age, name, gender, email, password, userType } = userData;
    //bcrypt password
    const saltRounds = 10;
    let hashpassword = await bcrypt.hash(password, saltRounds);
    
    const newUser = new UserModel({
      name,
      age,
      gender: gender || null,
      email,
      password: hashpassword,
      userType,
    });
    // Save the user to the database
    let data = await newUser.save();
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.log("error in register service", error);
  }
};

const checkUserbyEmail = async (email, userType) => {
  let checkUser = await UserModel.findOne({
    email: email,
    isDeleted: 0,
    userType,
  });

  return {
    checkUser,
  };
};

module.exports = { registerService, checkUserbyEmail };
