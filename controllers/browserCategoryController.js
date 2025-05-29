const browserCategoryService = require("../services/browserCategoryService");

const createBrowserCategory = async (req, res) => {
  try {
    const { title, color } = req.body;
    if (!title) {
      throw new Error("Title is required");
    }
    if (!color) {
      throw new Error("color is required");
    }
    const result = await browserCategoryService.createBrowserCategory({
      title,
      color,
    });
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message || "Server error" });
  }
};

const getBrowserCategories = async (req, res) => {
  try {
    const categories = await browserCategoryService.getAllBrowserCategories();
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteBrowserCategory = async (req, res) => {
  try {
    const result = await browserCategoryService.deleteBrowserCategory(
      req.params.id
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: err.message || "Server error" });
  }
};

module.exports = {
  createBrowserCategory,
  getBrowserCategories,
  deleteBrowserCategory,
};
