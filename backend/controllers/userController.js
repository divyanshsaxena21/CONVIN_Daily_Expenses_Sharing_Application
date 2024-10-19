const User = require('../models/userModel');

const createUser = async (req, res) => {
  const { name, email, mobileNumber } = req.body;

  try {
    const user = await User.create({ name, email, mobileNumber });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getUserByEmail };
