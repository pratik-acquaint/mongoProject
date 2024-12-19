const register = (req,res) => {
  try {

    res.send('express works')
  } catch (error) {
    console.log("error in register controller------->", error);
  }
};

module.exports = { register };
