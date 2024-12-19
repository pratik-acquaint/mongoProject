const UserModel = require("../model/authentication");

const registerService = async (userData) => {
  try {
    const { name, gender, email, password, userType } = userData;

    const newUser = new UserModel({
      name,
      gender: gender || null,
      email,
      password: password,
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

module.exports = { registerService };
