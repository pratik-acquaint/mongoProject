const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const Router = require("./routes/index");

//middleware
app.use(express.json());

//called route
app.use("/api/v1", Router);

//database & server connection
mongoose
  .connect(process.env.END_POINT)
  .then(() => {
    console.log("Database Connection Establise Successfully ----->", new Date());
    app.listen(process.env.PORT, () => {
      console.log(`Server start on PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection error", error);
  });

