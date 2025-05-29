const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// Registration
router.post("/register", userController.register); // Public
router.get("/register", userController.getRegisteredUsers); // Public
router.delete("/register/:id", userController.deleteRegisteredUser);

// User Routes
router.get("/users", authMiddleware, userController.getUsers);
router.get("/user", authMiddleware, userController.getCurrentUser);

// Login Route
router.post("/login", userController.login);

module.exports = router;