const Post = require("../models/post.models");
const Category = require("../models/category.models");

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

    const featuredPosts = await Post.find({ featuredBlog: true });

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
    ]);

    const categories = await Category.find({ setOnHome: true }).select("_id name");

    res
      .status(200)
      .json({ success: true, featuredPosts, latestPosts, categories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { homeData };
