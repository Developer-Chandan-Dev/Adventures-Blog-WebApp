const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // match: [
      //   /^[^\s@]+[^\s@]+\.[^\s@]+$/,
      //   "Please enter a valid email address",
      // ],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["reader", "author", "admin"],
      default: "reader", // Role based access
    },
    isBlocked: {
      type: Boolean,
      default: false, // By default, the user is not blocked
    },
    teamMember: {
      type: Boolean,
      default: false,
    },
    bio: {
      type: String, // Optional field for authors
    },
    profilePic: {
      type: String, // cloudinary URL for the user's profile picture
    },
    profilePicPublicId: {
      type: String, // public id for profilepic
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
