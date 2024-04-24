const User = require('../models/user');

const userController = {
  // creating a new user
  createUser: async (req, res) => {
    try {
      const { name } = req.body;
      const newUser = new User({
        name
      });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  },

  // for getting details of a specific user
  getUserDetails: async (req, res) => {
    try {
      const userId = req.params.id;
      // find the user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve user details' });
    }
  },

  // for updating a user
  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const { name } = req.body;
      // find and update the user
      const updatedUser = await User.findByIdAndUpdate(userId, { name }, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update user' });
    }
  },

  // for deleting a user
  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      // find and delete the user
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  }
};

module.exports = userController;
