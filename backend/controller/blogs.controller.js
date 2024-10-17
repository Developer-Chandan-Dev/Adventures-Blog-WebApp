const Post = require("../models/post.models");
const Category = require("../models/category.models");
const validateFields = require("../utils/validateFields");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../utils/uploadToCloudinary.js");
const sanitizeHtml = require("sanitize-html");

// add a new post
const addPost = async (req, res) => {
  try {
    const data = req.body;
    const coverImage = req.file ? req.file.path : null; // Get local file path

    // Required fields for the post
    const requiredFields = [
      "title",
      "slug",
      "richTextContent",
      "author",
      "coverImage",
    ];

    // Validate the incoming data
    const { isValid, errors } = validateFields(
      { coverImage, ...data },
      requiredFields
    );

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

    // Upload on cloudinary
    const result = await uploadToCloudinary(
      coverImage,
      "posts-coverImage",
      `posts-coverImage/postImage_${Date.now()}`
    );

    // Sanitize the rich text content
    const sanitizedContent = sanitizeHtml(data.richTextContent, {
      allowedTags: [
        "b",
        "i",
        "em",
        "strong",
        "a",
        "ul",
        "li",
        "ol",
        "p",
        "h1",
        "h2",
        "h3",
        "img",
      ], // Allow certain tags
      allowedAttributes: {
        a: ["href", "target"], // Allow only href and target attributes in <a> tags
        img: ["src", "alt", "width", "height"], // Allow only href and target attributes in <a> tags
      },
    });

    const newPost = new Post({
      ...data,
      content: sanitizedContent,
      coverImage: result.secure_url,
      coverImagePublicId: result.public_id,
    });

    if (newPost) {
      const response = await newPost.save();
      res
        .status(201)
        .json({ success: true, message: "Post add successfully", response });
    } else {
      return res
        .status(400)
        .json({ success: false, error: "Something went wrong saving time" });
    }
  } catch (error) {
    console.error("Error :", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({ status: "published" })
      .select("_id title excerpt slug comments views coverImage createdAt")
      .populate("author", "username profilePic _id")
      .populate("category", "name _id");
    const categories = await Category.find().select("_id name");

    if (!posts || !categories) {
      return res
        .status(400)
        .json({ success: false, error: "Blogs or categories not found" });
    }

    res.status(200).json({ success: true, posts, categories });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const getDashboardBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const searchQuery = req.query.search || "";

    // <------------ Search Filter -------------->
    // Build search condition
    // const searchCondition = {
    //   published: true, // Only published posts
    //   $or: [
    //     { title: { $regex: searchQuery, $options: "i" } },
    //     { content: { $regex: searchQuery, $options: "i" } },
    //   ],
    // };

    if (req.user.role === "admin" || req.user.teamMember === true) {
      const searchCondition = {
        status: "published", // Only published posts
        title: { $regex: searchQuery, $options: "i" },
      };
      // Count total items that match the search query
      const totalItems = await Post.countDocuments(searchCondition);
      const totalPages = Math.ceil(totalItems / limit);

      // Filter posts
      const posts = await Post.find(searchCondition)
        .select("_id title slug createdAt status featuredBlog")
        .populate("author", "username _id")
        .populate("category", "name _id")
        .skip((page - 1) * limit)
        .limit(limit);

      if (!posts || !totalPages || !totalItems) {
        return res
          .status(400)
          .json({ success: false, error: "Blogs not found" });
      }

      return res
        .status(200)
        .json({ success: true, posts, totalItems, totalPages });

      // Check for role author
    } else if (req.user.role === "author") {
      // Step 1: Filter posts by the logged-in user (author)
      const userId = req.user._id;

      // Step 2: Build search condition to filter user's posts
      const searchCondition = {
        author: userId, // Ensure only the logged-in user's posts are returned
        status: "published", // Only published posts
        title: { $regex: searchQuery, $options: "i" }, // Match the title, case-insensitive
      };

      // Step 3: Count total items that match the search query
      const totalItems = await Post.countDocuments(searchCondition);
      const totalPages = Math.ceil(totalItems / limit);

      // Fetch posts based on the search condition
      const posts = await Post.find(searchCondition)
        .select("_id title slug createdAt status featuredBlog")
        .populate("author", "username _id")
        .populate("category", "name _id")
        .skip((page - 1) * limit)
        .limit(limit);

      if (!posts || !totalPages || !totalItems) {
        return res
          .status(400)
          .json({ success: false, error: "Blogs not found" });
      }

      return res
        .status(200)
        .json({ success: true, posts, totalItems, totalPages });
    }
    //   // Check for team Member
    // else if (req.user.teamMember === true) {
    //   const posts = await Post.find({ status: "published" })
    //     .select("_id title slug createdAt status featuredBlog")
    //     .populate("author", "username _id")
    //     .populate("category", "name _id");

    //   if (!posts) {
    //     return res
    //       .status(400)
    //       .json({ success: false, error: "Blogs not found" });
    //   }

    //   // console.log(posts);
    //   return res.status(200).json({ success: true, posts });
    // }
  } catch (error) {
    console.error("Error :", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const getDraftBlogs = async (req, res) => {
  try {
    const posts = await Post.find({ status: "draft" })
      .select("_id title slug createdAt status featuredBlog")
      .populate("author", "username _id")
      .populate("category", "name _id");

    if (!posts) {
      return res.status(400).json({ success: false, error: "Blogs not found" });
    }

    res.status(200).json({ success: true, posts });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// Get a single posts
const getSinglePost = async (req, res) => {
  try {
    const { slug } = req.params;

    const post = await Post.findOne({ slug: slug }).populate(
      "author",
      "username profilePic _id"
    );

    if (!post) {
      return res.status(404).json({ success: false, error: "Blog not found" });
    }
    res.status(200).json({ success: true, post });
  } catch (error) {
    console.error("Error in getting single blog", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

// Get a single posts
const getSinglePostById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById({ _id: id })
      .select(
        "-createdAt -coverImagePublicId -coverImage -comments -featuredBlog -views -status"
      )
      .populate("author", "username profilePic _id");
    
    if (!post) {
      return res.status(404).json({ success: false, error: "Blog not found" });
    }
    res.status(200).json({ success: true, post });
  } catch (error) {
    console.error("Error in getting single blog", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

// Update a post
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const coverImage = req.file ? req.file.path : null; // Get local file path

    let coverImageUrl = null;
    let coverImagePublicId = null;

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ seccess: false, error: "Post not found" });
    }

    // Delete the old profile picture if a new one is provided
    if (post.coverImagePublicId && coverImage) {
      await deleteFromCloudinary(post.coverImagePublicId);
    }

    // Upload the new profile picture if provided
    if (coverImage) {
      const uploadResult = await uploadToCloudinary(
        coverImage,
        "posts-coverImage",
        `posts-coverImage/postImage_${Date.now()}`
      );
      coverImageUrl = uploadResult.secure_url;
      coverImagePublicId = uploadResult.public_id;
    }

    // Replace the post details with new data
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        coverImage: coverImageUrl,
        coverImagePublicId: coverImagePublicId,
        ...updatedData,
      },
      {
        new: true,
        overwrite: true, // Overwrite the document with the new data
        runValidators: true,
      }
    );

    if (!updatedPost) {
      return res
        .status(404)
        .json({ success: false, error: "Student not found" });
    }

    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      updatedPost,
    });
  } catch (error) {
    console.error("Error in adding tag", error);
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

    // Delete coverImage from cloudinary
    if (post.coverImagePublicId && post.coverImage) {
      await deleteFromCloudinary(post.coverImagePublicId);
    }

    await post.deleteOne();
    res.status(200).json({ success: true, message: "Post deleted" });
  } catch (error) {
    console.error("Error in deleting post", error);
    res.status(500).json({ success: true, error: "Failed to delete post" });
  }
};

const publishUnPublishPost = async (req, res) => {
  const { postId } = req.params;

  const post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({ success: false, error: "Post not found" });
  }

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    {
      status: post.status === "draft" ? "published" : "draft",
    },
    { new: true }
  );

  if (!updatedPost) {
    return res.status(404).json({ status: false, error: "Post not found" });
  }

  res.status(200).json({
    status: true,
    message: `${
      updatedPost.status === "published"
        ? "Post published successfully"
        : "Remove from published post"
    } `,
  });
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
    });
  } catch (error) {
    console.error("Failed to update featured post", error);
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
    // Check if the user already liked the post
    if (post.likes.includes(userId)) {
      // If user already liked the post, remove the like (dislike)
      post.likes = post.likes.filter(
        (likeId) => likeId.toString() !== userId.toString()
      );
      await post.save();

      return res.status(200).json({
        success: true,
        message: "Post disliked",
        likes: post.likes,
      });
    } else {
      // If user has not liked the post, add their like
      post.likes.push(userId);
      await post.save();

      return res.status(200).json({
        success: true,
        message: "Post liked",
        likes: post.likes,
      });
    }
  } catch (error) {
    console.error("Failed to like/unlike comment", error);
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
  getDashboardBlogs,
  featuredPost,
  getDraftBlogs,
  publishUnPublishPost,
  getSinglePostById,
};
