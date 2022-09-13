// libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// routes
const home = require("./routes/home");

// database
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", function () {
  // console.log("Database is now connected");
});

// use
const app = express();
app.use(express.json());
app.use(cors());

app.use(home);

// port
app.listen(process.env.PORT || 5000, function () {
  console.log("mserver is now running");
  console.log(".");
  console.log(".");
  console.log(".");
});
