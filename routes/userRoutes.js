const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userController.register); // Public
router.get('/register', userController.getRegisteredUsers); // Public
router.delete('/register/:id', userController.deleteRegisteredUser); // Public: New DELETE route
router.post('/login', userController.login);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/user', authMiddleware, userController.getCurrentUser);

module.exports = router;