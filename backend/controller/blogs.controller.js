const Post = require("../models/post.models");
const Category = require("../models/category.models");
const validateFields = require("../utils/validateFields");

// add a new post
const addPost = async (req, res) => {
  try {
    const data = req.body;

    // Required fields for the post
    const requiredFields = ["title", "slug", "content", "author", "coverImage"];

    // Validate the incoming data
    const { isValid, errors } = validateFields(data, requiredFields);

    // If validation fails, return errors
    if (!isValid) {
      return res.status(400).json({
        success: false,
        error: "Validation failed - Please fill all required fields",
        errors,
      });
    }

    const slug = await Post.findOne({ slug: data.slug });
    if (slug) {
      return res
        .status(400)
        .json({ success: false, error: "Slug already exists" });
    }

    const newPost = new Post(data);
    if (newPost) {
      const response = await newPost.save();
      res.status(201).json({ success: true, response });
    } else {
      return res
        .status(400)
        .json({ success: false, error: "Something went wrong saving time" });
    }
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    const categories = await Category.find().select("_id name");

    if (!posts || !categories) {
      return res
        .status(400)
        .json({ success: false, error: "Blogs or categories not found" });
    }

    res.status(200).json({ success: true, posts, categories });
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// Get a single posts
const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ success: false, error: "Blog not found" });
    }
    res.status(200).json({ success: true, post });
  } catch (error) {
    console.log("Error in getting single blog", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

// Update a post
const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ seccess: false, error: "Post not found" });
    }

    // Replace the post details with new data
    const updatedPost = await Post.findByIdAndUpdate(id, updatedData, {
      new: true,
      overwrite: true, // Overwrite the document with the new data
    });

    if (!updatedPost) {
      return res
        .status(404)
        .json({ success: false, error: "Student not found" });
    }

    res.status(200).json({ success: true, updatedPost });
  } catch (error) {
    console.log("Error in adding tag", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

// Delete a post by its ID
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ success: false, error: "Post not found" });
    }

    // Check if the user is the owner of the post or an admin
    if (
      post.author.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(401).json({
        success: false,
        error: "Unauthorized - You have not access to delete this post",
      });
    }

    await post.deleteOne();
    res.status(200).json({ success: true, message: "Post deleted" });
  } catch (error) {
    console.log("Error in deleting post", error);
    res.status(500).json({ success: true, error: "Failed to delete post" });
  }
};

// Featured post true/false
const featuredPost = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ success: false, error: "Post not found" });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        featuredBlog: post.featuredBlog === true ? false : true,
      },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ status: false, error: "Post not found" });
    }

    res.status(200).json({
      status: true,
      message: `${
        updatedPost.featuredBlog === true ? "Set as" : "Remove from"
      } featured post`,
      posts: updatedPost,
    });

  } catch (error) {
    console.log("Failed to update featured post", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to update featured post" });
  }
};

// Like or unlike a post
const likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ success: false, error: "Post not found" });
    }

    if (post.likes.includes(userId)) {
      post.likes.pull(userId);
    } else {
      post.likes.push(userId);
    }

    await post.save();
    res.status(200).json({
      success: true,
      message: "Like status updated",
      likes: post.likes,
    });
  } catch (error) {
    console.log("Failed to like/unlike comment", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to like/unlike comment" });
  }
};

module.exports = {
  addPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  likePost,
  featuredPost,
};
