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
    const token = req.cookies.jwt;
    // cookie/token === null || not found
    if (!token && token !== "undefined") {
      throw createError("Unauthorized - No token provided", 401);
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      throw createError("Invalid token, Unauthorized", 401);
    }

    const user = await User.findById(decoded.userId).select("-password");

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
const protectCRUD = async (req, res, next) => {
  if ((req.user && req.user.role === "admin") || req.user.role === "author") {
    console.log(req.user);
    next();
  } else {
    return res.status(401).json({
      success: false,
      error:
        "Unauthorized - You have not access for create update and delete posts",
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
