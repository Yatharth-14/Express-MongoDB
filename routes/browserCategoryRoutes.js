const express = require("express");
const router = express.Router();
const browserCategoryController = require("../controllers/browserCategoryController");

router.post(
  "/browserCategories",
  browserCategoryController.createBrowserCategory
);
router.get(
  "/browserCategories",
  browserCategoryController.getBrowserCategories
);
router.delete(
  "/browserCategories/:id",
  browserCategoryController.deleteBrowserCategory
);

module.exports = router;
