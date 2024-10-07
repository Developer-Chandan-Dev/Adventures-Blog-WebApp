const Post = require("../models/post.models");
const Category = require("../models/category.models");
const User = require("../models/user.models");

function getCurrentMonthRange() {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1); // First day of the current month
  const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1); // First day of the next month

  return { start: startOfMonth, end: startOfNextMonth };
}

const homeData = async (req, res) => {
  try {
    // Get current month's date range
    const { start, end } = getCurrentMonthRange();

    const featuredPosts = await Post.find({ featuredBlog: true }).populate(
      "author",
      "username profilePic _id"
    );

    // Aggregation pipelines
    const latestPosts = await Post.aggregate([
      // Stage 1: Match documents created in the current month
      {
        $match: {
          createdAt: {
            $gte: start, // Start of the current month
            $lt: end, // Less than the start of the next month
          },
        },
      },
      {
        $sort: { createdAt: -1 }, // Sort by date in descending order
      },
      {
        $lookup: {
          from: User.collection.name, // The collection naem for User
          localField: "author", // The field from Post
          foreignField: "_id", // The field from User
          as: "authorDetails", // The name of teh array to add author details
        },
      },
      {
        $unwind: {
          path: "$authorDetails", // Flatten the array
          // preserveNullAndEmptyArrays: true, // Optiona: if you want to keep posts without an author
        },
      },
      {
        $lookup: {
          from: Category.collection.name,
          localField: "category",
          foreignField: "_id",
          as: "categoryDetails",
        },
      },
      {
        $unwind: {
          path: "$categoryDetails", // Flatten the array
          // preserveNullAndEmptyArrays: true, // Optiona: if you want to keep posts without an author
        },
      },
      {
        $project: {
          _id: 1, // Include the post
          title: 1, //  Include the post title
          excerpt: 1, // Include the post content
          coverImage: 1, // Include the post coverImage
          createdAt: 1, // Include the post creatation date
          slug: 1, // Include the post slug
          views: 1, // Include the post views
          comments: 1, // Include the post comments
          "categoryDetails.name": 1, // Include category name
          "categoryDetails._id": 1, // Include category id
          // Include other fields you need
        },
      },
    ]);
    console.log(latestPosts, "83");
    const categories = await Category.find({ setOnHome: true }).select(
      "_id name"
    );

    res
      .status(200)
      .json({ success: true, featuredPosts, latestPosts, categories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { homeData };
