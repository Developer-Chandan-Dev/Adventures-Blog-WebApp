const User = require("../models/user.models");
const bcryptjs = require("bcryptjs");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../utils/uploadToCloudinary");

// Get all users by Admin
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select(
      "-password -bio -profilePicPublicId -updatedAt"
    );

    if (!users) {
      return res.status(404).json({ success: false, error: "Users not found" });
    }

    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error("Failed to get all user", error);
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
    console.error("Failed to get user details", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to get user details", error });
  }
};

// Update user details by user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    console.log(userData, "52");
    const profilePic = req.file ? req.file.path : null; // Get local file path

    let profilePicUrl = null;
    let profilePicPublicId = null;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ seccess: false, error: "User not found" });
    }
    // Delete the old profile picture of a new one is provided
    if (user.profilePicPublicId && profilePic) {
      await deleteFromCloudinary(user.profilePicPublicId);
    }

    // Upload the new profile picture if provided
    if (profilePic) {
      const uploadResult = await uploadToCloudinary(
        profilePic,
        "users",
        `users/${user.username}_${Date.now()}`
      );
      profilePicUrl = uploadResult.secure_url;
      profilePicPublicId = uploadResult.public_id;
    }

    // Replace the blogs details with new data
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        profilePic: profilePicUrl,
        profilePicPublicId: profilePicPublicId,
        ...userData,
      },
      {
        new: true,
        runValidators: true,
        overwrite: true, // Overwrite the document with the new data
      }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ seccess: false, message: "User not found" });
    }

    res.status(200).json({ success: true, message: "User details updated" });
  } catch (error) {
    console.error("Failed to update user details", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to update user details", error });
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

    // Delete profilePic from cloudinary
    if (user.profilePicPublicId && user.profilePic) {
      await deleteFromCloudinary(user.profilePicPublicId);
    }

    await User.deleteOne();
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (error) {
    console.error("Failed to delete user", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to delete user", error });
  }
};

// Block or Unblock user by Admin
const blockUnblockUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    if (user.isBlocked === true) {
      user.isBlocked = false; // Unblock the user
      res
        .status(200)
        .json({ success: true, message: "Uesr unblocked successfully" });
    } else if (user.isBlocked === false) {
      user.isBlocked = true; // Block the user
      res
        .status(200)
        .json({ success: true, message: "User blocked successfully" });
    } else {
      return res.status(400).json({ success: false, error: "Invalid user" });
    }

    await user.save();
  } catch (error) {
    console.error("Failed to block/unblock user", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to block/unblock user", error });
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

    res
      .status(200)
      .json({ success: true, message: `User role updated to ${user.role}` });
  } catch (error) {
    console.error("Failed to update user details", error);
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

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

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
      message: `${
        updatedUser.teamMember === true
          ? "User promoted to team member"
          : "Remove from team Member"
      }`,
    });
  } catch (error) {
    console.error("Error promoting user", error);
    res
      .status(500)
      .json({ status: false, error: "Error promoting user", error });
  }
};

// Get al team members
const getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await User.find({ teamMember: true }).select(
      "-password -updatedAt -role -isBlocked"
    );
    const authors = await User.find({
      role: { $in: ["admin", "author"] },
    }).select("-password -updatedAt -isBlocked");

    res.status(200).json({ status: true, teamMembers, authors });
  } catch (error) {
    console.error("Error fetching team members", error);
    res
      .status(500)
      .json({ status: false, error: "Error fetching team members", error });
  }
};

const changePassword = async (req, res) => {
  try {
    const userId = req.params.id;
    const { email, password, newPassword } = req.body;

    if (!email || !password || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const user = await User.findById(userId);
 
    const validateEmail = await User.findOne({ email });

    const validatePassword = await bcryptjs.compare(password, user.password);

    if (!validateEmail || !validatePassword) {
      console.log("Invalid Email or Password");
      return res
        .status(400)
        .json({ success: false, message: "Invalid Email or Password" });
    }

    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(newPassword, salt);

    // Save the updated user
    await user.save();

    res
      .status(200)
      .json({ success: true, message: "Password changed successfully." });
  } catch (error) {
    console.error("Failed to get user details", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to get user details", error });
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
  blockUnblockUser,
  changePassword,
};
