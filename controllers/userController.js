const userService = require('../services/userService');

const register = async (req, res) => {
  try {
    const result = await userService.registerUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message || 'Server error' });
  }
};

const login = async (req, res) => {
  try {
    const result = await userService.loginUser(req.body);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message || 'Server error' });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getRegisteredUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.user.userId);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: err.message || 'Server error' });
  }
};

const deleteRegisteredUser = async (req, res) => {
  try {
    const result = await userService.deleteUserById(req.params.id);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: err.message || 'Server error' });
  }
};

module.exports = {
  register,
  login,
  getUsers,
  getRegisteredUsers,
  getCurrentUser,
  deleteRegisteredUser, // New controller function
};