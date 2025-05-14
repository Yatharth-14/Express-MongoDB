const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const registerUser = async ({ username, email, password }) => {
  // Check if user exists
  let user = await User.findOne({ email });
  if (user) {
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new user
  user = new User({
    username,
    email,
    password: hashedPassword,
  });

  await user.save();

  // Generate JWT
  const payload = { userId: user._id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  return { token, message: 'User registered successfully' };
};

const loginUser = async ({ email, password }) => {
  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Verify password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  // Generate JWT
  const payload = { userId: user._id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  return { token, message: 'Login successful' };
};

const getAllUsers = async () => {
  return await User.find().select('-password');
};

const getUserById = async (userId) => {
  const user = await User.findById(userId).select('-password');
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

const deleteUserById = async (userId) => {
  const user = await User.findByIdAndDelete(userId);
  if (!user) {
    throw new Error('User not found');
  }
  return { message: 'User deleted successfully' };
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  deleteUserById, // New service function
};