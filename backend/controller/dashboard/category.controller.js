const Category = require("../../models/category.models");

const addCategory = async (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Category name not found" });
  }

  const category = await Category.findOne({ name: name });

  if (category) {
    return res.status(400).json({ error: "Category name already exists" });
  }

  const newCategory = new Category({ name, description });

  if (newCategory) {
    await newCategory.save();
    res.status(201).json({ message: "Category added successfully" });
  } else {
    res.status(400).json({ error: "Something went wrong" });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();

    if (!categories) {
      return res.status(400).json({ error: "No category available" });
    }

    res.status(200).json(categories);
  } catch (error) {
    console.log("Error in signup controller", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateCategory = async (req, res) => {};

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;

    const categoryDelete = await Category.findByIdAndDelete({ _id: id });

    const category = await Category.findById({ _id: id });
    if (!category) {
      res.status(200).json({ message: "Category deleted successfully" });
    } else {
      return res.status(500).json({ error: "Problem in deleting category" });
    }
  } catch (error) {
    console.log("Error in signup controller", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
};
