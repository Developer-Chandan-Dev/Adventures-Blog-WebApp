const Post = require("../models/post.models");
const Category = require("../models/category.models");

const homeData = async (req, res) => {
  try {
    const featuredBlogs = await Post.find({ featuredBlog: true });

    // const latestBlogs = await Post.find({});

    const categories = await Category.find();

    res
      .status(200)
      .json({ featuredBlogs: featuredBlogs, category: categories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = homeData;
