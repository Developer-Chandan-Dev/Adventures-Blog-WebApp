const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug:{
      type:String,
      required:true,
      unique:true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    featuredBlog: {
      type: Boolean,
      default: false,
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ], // Array of categories
    tags: [{ type: String }], // Array of tags for blog post
    coverImage: { type: String, required: true }, // URL for the cover image of the blog post
    coverImagePublicId: { type: String },
    status: { type: String, enum: ["draft", "published"], default: "draft" }, // Post status
    views: { type: Number, default: 0 }, // View count
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // List of user to liked the post
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], // Reference to comments
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
