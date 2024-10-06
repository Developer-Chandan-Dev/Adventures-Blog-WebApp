const jwt = require("jsonwebtoken");

const User = require("../models/user.models");

// Custom error handling for ease of use
const createError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

// check authentication
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.adventuresBlogs_jwtToken;
    // cookie/token === null || not found
    if (!token && token !== "undefined") {
      throw createError("Unauthorized - No token provided", 401);
    }
    console.log(token, "20");

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);
    if (!decoded) {
      throw createError("Invalid token, Unauthorized", 401);
    }

    const user = await User.findById(decoded.userId).select("-password");
    console.log(user);
    if (!user) {
      throw createError("User not found", 404);
    }

    req.user = user;
    next();
  } catch (error) {
    // Handle errors related to JWT validation to request object
    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || "Internal Server Error",
    });
    console.error("Error in isAuthenticated middleware", error);
  }
};

// Dashboard protection
const protectDashboard = async (req, res, next) => {
  if (
    (req.user && req.user.role === "admin") ||
    req.user.role === "author" ||
    req.user.teamMember === true
  ) {
    next();
  } else {
    return res.status(401).json({
      success: false,
      error: "Unauthorized - You have not access in dashboard",
    });
  }
};

// Prevent access blocked user
const checkBlocked = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email: email });
  if (user && user.isBlocked) {
    return res
      .status(403)
      .json({ success: false, error: "Your account has been blocked" });
  }
  next();
};
const checkBlockedAfterAuth = async (req, res, next) => {
  if (req.user && req.user.isBlocked) {
    console.log(req.user, req.user.isBlocked);
    return res
      .status(403)
      .json({ success: false, error: "Your account has been blocked" });
  }
  next();
};

// Prevent CUD operations
// Prevent Create, Update, and Delete operations for unauthorized users
const protectCRUD = (req, res, next) => {
  try {
    // Ensure req.user exists and check for roles
    if (req.user && (req.user.role === "admin" || req.user.role === "author")) {
      // If the user is authorized, proceed to the next middleware or route handler
      next();
    } else {
      // User is not authorized
      return res.status(401).json({
        success: false,
        error: `Unauthorized - You do not have access to create, update, or delete posts. Your role: ${
          req.user?.role || "unknown"
        }`,
      });
    }
  } catch (error) {
    // Handle any unexpected errors
    return res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

module.exports = {
  isAuthenticated,
  protectDashboard,
  protectCRUD,
  checkBlocked,
  checkBlockedAfterAuth,
};
