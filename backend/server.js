const express = require("express");
const dotenv = require("dotenv").config(); // dotenv configured
const db = require("./db/ConnectToMongoDB"); // MongoDB connection
const app = express();

// <============= PORT ==============>
const PORT = process.env.PORT || 5000;

// <============= Route Imports ============>
const homeData = require("./routes/user_routes/home.route");

// <============= Routes ============>
app.use("/api/v1", homeData); // Home page data

// <============= Server is listning here ============>
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/${PORT}`);
});
