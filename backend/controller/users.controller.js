const User = require("../models/user.models");

const getAllUsers = async (req, res) => {
  try {
    // if (req.user.role !== "admin") {
    //   console.log(req.user.role);
    //   return res.status(401).json({
    //     success: false,
    //     error: "Unauthorized - You have not access to do this",
    //   });
    // }

    const users = await User.find().select("-password");

    if (!users) {
      return res.status(404).json({ success: false, error: "Users not found" });
    }

    res.status(200).json(users);
  } catch (error) {
    console.log("Failed to get all user", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to get all user", error });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, error: "Users not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("Failed to get user details", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to get user details", error });
  }
};

const deleteUser = async (req, res) => {
  try {
    // Check if the user role is admin or not
    // if (req.user.role !== "admin") {
    //   console.log(req.user.role);
    //   return res.status(401).json({
    //     success: false,
    //     error: "Unauthorized - You have not access to do this",
    //   });
    // }

    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    await User.deleteOne();
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (error) {
    console.log("Failed to delete user", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to delete user", error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ seccess: false, error: "User not found" });
    }

    // Replace the blogs details with new data
    const updatedUser = await User.findByIdAndUpdate(id, userData, {
      new: true,
      overwrite: true, // Overwrite the document with the new data
    });

    if (!updatedUser) {
      return res
        .status(404)
        .json({ seccess: false, message: "User not found" });
    }

    res.status(200).json({ success: true, message: "User details updated" });
  } catch (error) {
    console.log("Failed to update user details", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to update user details", error });
  }
};

const updateRole = async (req, res) => {
  try {
    // Check if the user role is admin or not
    // if (req.user.role !== "admin") {
    //   console.log(req.user.role);
    //   return res.status(401).json({
    //     success: false,
    //     error: "Unauthorized - You have not access to do this",
    //   });
    // }

    const { id } = req.params;
    const { role } = req.body;

    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ seccess: false, message: "User not found" });
    }

    user.role = role;
    await user.save();

    res.status(200).json({ success: true, message: "User role updated" });
  } catch (error) {
    console.log("Failed to update user details", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to update user details", error });
  }
};

module.exports = { getAllUsers, getUser, deleteUser, updateUser, updateRole };
