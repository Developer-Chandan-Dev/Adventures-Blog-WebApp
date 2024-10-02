const Post = require("../models/post.models");
const Category = require("../models/category.models");
const Comment = require("../models/comment.models");

const addBlogs = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ error: "Data not provided" });
    }

    const slug = await Post.findOne({ slug: data.slug });

    if (slug) {
      return res.status(400).json({ error: "Slug already exists" });
    }

    const newPost = new Post(data);

    if (newPost) {
      const response = await newPost.save();
      res.status(201).json(response);
    } else {
      return res
        .status(400)
        .json({ error: "Something went wrong saving time" });
    }
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const allBlogs = async (req, res) => {
  try {
    const blogs = await Post.find();
    const categories = await Category.find().select("_id name");

    if (!blogs || !categories) {
      return res.status(400).json({ error: "Blogs or categories not found" });
    }

    res.status(200).json({ blogs, categories });
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSingleBlog = async (req, res) => {
  try {
    const id = req.params.id;

    const blog = await Post.findOne({ _id: id });

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.log("Error in getting single blog", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    // Replace the blogs details with new data
    const updatedBlog = await Post.findByIdAndUpdate(id, updatedData, {
      new: true,
      overwrite: true, // Overwrite the document with the new data
    });

    if (!updatedBlog) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.log("Error in adding tag", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;

    await Post.findByIdAndDelete({ _id: id });

    const confirmDelete = await Post.findOne({ _id: id });

    if (confirmDelete) {
      return res.status(400).json({ error: "Something went on delete time" });
    } else {
      return res.status(200).json({ message: "Blog delete successfully" });
    }
  } catch (error) {
    console.log("Error in deleting blog", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;
    const userId = req.user._id;

    const newComment = await Comment.create({
      postId,
      userId,
      content,
    });

    res.status(201).json({ success: true, comment: newComment });
  } catch (error) {
    console.log("Error in adding comment", error);
    res
      .status(500)
      .json({ success: false, error: "Internal server error", error });
  }
};

const allComments = async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await Comment.find({ postId }).populate(
      "userId",
      "username profilePic"
    );

    res.status(200).json({ success: true, comments });
  } catch (error) {
    console.log("Failed to fetch comments", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch comments", error });
  }
};

const updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { content } = req.body;

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res
        .status(404)
        .json({ seccess: false, message: "Comment not found" });
    }

    // Check if the user is the owner of the comment
    if (comment.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, error: "Unauthorized" });
    }

    comment.content = content;
    await comment.save();

    res
      .status(200)
      .json({ success: true, message: "Comment updated", comment });
  } catch (error) {
    console.log("Error in adding comment", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to update comment", error });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findById(commentId);
    if (!comment) {
      res.status(404).json({ success: false, error: "Comment not found" });
    }
    // Check if the user is the owner of the comment or an admin
    if (
      comment.userId.toString() !== req.user._id.toString() &&
      req.user.role !== admin
    ) {
      return res.status(403).json({ success: false, error: "Unauthorized" });
    }

    await comment.deleteOne();
    res.status(200).json({ success: true, message: "Comment deleted" });
  } catch (error) {
    console.log("Error in adding comment", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to delete", error });
  }
};

module.exports = {
  addBlogs,
  allBlogs,
  updateBlog,
  deleteBlog,
  getSingleBlog,
  addComment,
  allComments,
  updateComment,
  deleteComment,
};
