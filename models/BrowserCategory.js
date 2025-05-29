const mongoose = require("mongoose");

const browserCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  color: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BrowserCategory", browserCategorySchema);
