const express = require("express");
const dotenv = require("dotenv").config(); // dotenv configured
const db = require("./db/ConnectToMongoDB"); // MongoDB connection
const app = express();

// <============= PORT ==============>
const PORT = process.env.PORT || 5000;

// <============= Route Imports ============>

// <============= Routes ============>
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome on home page" });
});

// <============= Server is listning here ============>
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/${PORT}`);
});
