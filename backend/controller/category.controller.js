const Category = require("../models/category.models");

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

const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    // Replace the blogs details with new data
    const updatedCategory = await Category.findByIdAndUpdate(id, updatedData, {
      new: true,
      overwrite: true, // Overwrite the document with the new data
    });

    if (!updatedCategory) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.log("Error in adding tag", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;

    await Category.findByIdAndDelete({ _id: id });

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
