const mongoose = require("mongoose");
const User = require("../model/authentication");
require("dotenv").config();

const bcrypt = require("bcrypt");
let round = 10;

// bcrypt.hash('Admin@123', round, function (err, hash) {
//   console.log("Hashed password------->", hash);
// });

let hashpassword = bcrypt.hash('admin', round);
console.log("hashpassword--------->", hashpassword);

// const migrateUserType = async () => {
//   try {
//     // Connect to your MongoDB database
//     await mongoose.connect(process.env.END_POINT);

//     // Update users who don't have the userType field
//     await User.updateMany(
//       { age: { $exists: false } },
//       { $set: { age: 0 } }
//     );

//     console.log("Migration complete: `userType` added to old records.");

//     // Close the connection
//     mongoose.connection.close();
//   } catch (error) {
//     console.error("Migration error:", error);
//   }
// };

// // Execute the migration function
// migrateUserType();
