const express = require("express");
const dotenv = require("dotenv").config(); // dotenv configured
const db = require("./db/ConnectToMongoDB"); // MongoDB connection
const app = express();

// <============= PORT ==============>
const PORT = process.env.PORT || 5000;

app.use(express.json());

// files imports start here
const authRoutes = require("./routes/auth.routes");
const homeRoutes = require("./routes/home.routes");
const blogsRoutes = require("./routes/blogs.routes");
const categoryRoutes = require("./routes/category.routes");
const commentRoutes = require("./routes/comment.routes");

// client routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", homeRoutes);
app.use("/api/v1/dashboard/blogs", blogsRoutes);
app.use("/api/v1/dashboard/category", categoryRoutes);
app.use("/api/v1/dashboard/comments", commentRoutes);
// app.use("/api/v1/dashboard/author")
// app.use("/api/v1", blogsRoutes);

// dashboard routes

// <============= Server is listning here ============>
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/${PORT}`);
});
