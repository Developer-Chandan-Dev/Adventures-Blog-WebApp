const express = require("express");
const dotenv = require("dotenv").config(); // dotenv configured
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./db/ConnectToMongoDB"); // MongoDB connection
const app = express();

// <============= PORT ==============>
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({origin: "http://localhost:5173"}));

// files imports start here
const authRoutes = require("./routes/auth.routes");
const homeRoutes = require("./routes/home.routes");
const blogsRoutes = require("./routes/blogs.routes");
const categoryRoutes = require("./routes/category.routes");
const commentRoutes = require("./routes/comment.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const usersRoutes = require("./routes/users.routes");

// client routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", homeRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/v1/blogs", blogsRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/users", usersRoutes);

// <============= Server is listning here ============>
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/${PORT}`);
});
