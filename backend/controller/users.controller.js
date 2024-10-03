const User = require("../models/user.models");

// Get all users by Admin
const getAllUsers = async (req, res) => {
  try {
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

// Get a user details by user
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

// Delete users by Admin
const deleteUser = async (req, res) => {
  try {
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

// Update user details by user
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

// Updating user role by Admin
const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if (!role) {
      return res
        .status(400)
        .json({ status: false, error: "Please provide role" });
    }

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

// Promote/Demote a user to team member by Admin
const promoteToTeamMember = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId).select("_id teamMember");

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { teamMember: user.teamMember === true ? false : true }, // Promote the user
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ status: false, error: "User not found" });
    }

    res.status(200).json({
      status: true,
      message: "User promoted to team member",
      user: updatedUser,
    });
  } catch (error) {
    console.log("Error promoting user", error);
    res
      .status(500)
      .json({ status: false, error: "Error promoting user", error });
  }
};

// Get al team members
const getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await User.find({ teamMember: true }).select(
      "-password"
    );
    res.status(200).json({ status: true, teamMembers });
  } catch (error) {
    console.log("Error fetching team members", error);
    res
      .status(500)
      .json({ status: false, error: "Error fetching team members", error });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  updateRole,
  promoteToTeamMember,
  getTeamMembers,
};
