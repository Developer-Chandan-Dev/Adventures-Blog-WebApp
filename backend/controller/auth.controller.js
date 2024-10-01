const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const generateTokenAndSetCookie = require("../utils/generateToken");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);

    if (!username || !email || !password) {
      return res.status(404).json({ error: "Data not found" });
    }

    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ error: "Email already registered" });
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
        _id: response._id,
        username: response.username,
        email: response.email,
      });
    } else {
      return res.status(400).json({ message: "Invalid User" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if(!user){
      return res.status(404).json({error:"User not found"});
    }

    if (user.blocked === true) {
      return res
        .status(400)
        .json({ err: "User blocked, you cannot access this account." });
    }

    const comparePassword = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !comparePassword) {
      return res.status(400).json({ err: "Incorrect email or password" });
    }

    // Generate Token and set cookie
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      profilePic: user?.profilePic || "",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

module.exports = { signup, login, logout };
