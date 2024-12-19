const mongoose = require("mongoose");
const User = require("../model/authentication");


require("dotenv").config();

const migrateUserType = async () => {
  try {
    // Connect to your MongoDB database
    await mongoose.connect(process.env.END_POINT);

    // Update users who don't have the userType field
    await User.updateMany(
      { age: { $exists: false } },  
      { $set: { age: 0 } }         
    );

    console.log("Migration complete: `userType` added to old records.");

    // Close the connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Migration error:", error);
  }
};

// Execute the migration function
migrateUserType();
