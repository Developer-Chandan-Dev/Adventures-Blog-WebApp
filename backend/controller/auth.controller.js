const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const generateTokenAndSetCookie = require("../utils/generateToken");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);

    if (!username || !email || !password) {
      return res
        .status(404)
        .json({ success: false, error: "Please fill all fields" });
    }

    const user = await User.findOne({ email: email });
    console.log(user, "17");
    if (user) {
      return res
        .status(400)
        .json({ success: false, error: "Email already registered" });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // check new user is created or not
    if (newUser) {
      const response = await newUser.save();
      res.status(201).json({
        success: true,
        _id: response._id,
        username: response.username,
        email: response.email,
        role: response.role,
        message: "Signup Successfully",
      });
    } else {
      return res.status(400).json({ success: false, error: "Invalid User" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      return res
        .status(404)
        .json({ success: false, error: "Please fill all fields" });
    }

    const user = await User.findOne({ email: email });
    console.log(user, "64");

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    if (user.blocked === true) {
      return res.status(400).json({
        success: false,
        error: "User blocked, you cannot access this account.",
      });
    }

    const comparePassword = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !comparePassword) {
      return res
        .status(400)
        .json({ success: false, error: "Incorrect email or password" });
    }

    // Generate Token and set cookie
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        profilePic: user?.profilePic || "",
      },
      message: "Logged In Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("adventuresBlogs_jwtToken", "", {
      maxAge: 0, // Expires immediately
      httpOnly: true, // Same as when setting the cookie
      secure: process.env.NODE_ENV !== "development", // Same as when setting the cookie
      sameSite: "strict", // Same as when setting the cookie
      path: "/", // Ensure this matches the path used when the cookie was set
    });

    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = { signup, login, logout };
