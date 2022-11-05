const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

// Global route
app.get("/", (req, res) => {
  res.send("Welcome to Ambit Store");
});

// routes
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
app.use("/app/v1", userRoute);
app.use("/app/v1", productRoute);

module.exports = app;
