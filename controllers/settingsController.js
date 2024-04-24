const User = require('../models/user');

const settingsController = {
  // for retrieving user settings
  getUserSettings: async (req, res) => {
    try {
      // retrieve the user settings from database
      const user = await User.findById(req.user._id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      // return the user settings
      res.json({ settings: user.settings });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve user settings' });
    }
  },

  // for updating user settings
  updateUserSettings: async (req, res) => {
    try {
      // find the user by ID
      const user = await User.findById(req.user._id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      // Update user settings
      user.settings = req.body.settings;
      await user.save();
      // return success message
      res.json({ message: 'User settings updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update user settings' });
    }
  }
};

module.exports = settingsController;
