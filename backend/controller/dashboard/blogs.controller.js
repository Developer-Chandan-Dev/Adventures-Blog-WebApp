const Post = require("../../models/post.models");

const addBlogs = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
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
    const data = await Post.find();

    if (!data) {
      return res.status(400).json({ error: "Data not found" });
    }

    res.status(200).json(data);
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
    const data = req.body;

    res.send(data);
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

const addTag = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error in adding tag", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const allTags = async (req, res) => {};

const updateTag = async (req, res) => {};

const deleteTag = async (req, res) => {};

module.exports = {
  addBlogs,
  allBlogs,
  updateBlog,
  deleteBlog,
  getSingleBlog,
  addTag,
  allTags,
  updateTag,
  deleteTag,
};
