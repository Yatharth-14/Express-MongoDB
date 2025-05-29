const BrowserCategory = require("../models/BrowserCategory");

const createBrowserCategory = async ({ title,color }) => {
  const browserCategory = new BrowserCategory({
    title,
    color,
  });

  await browserCategory.save();
  return { message: "Browser category created successfully", browserCategory };
};

const getAllBrowserCategories = async () => {
  return await BrowserCategory.find();
};

const deleteBrowserCategory = async (categoryId) => {
  const category = await BrowserCategory.findByIdAndDelete(categoryId);
  if (!category) {
    throw new Error("Browser category not found");
  }
  return { message: "Browser category deleted successfully" };
};

module.exports = {
  createBrowserCategory,
  getAllBrowserCategories,
  deleteBrowserCategory,
};
