const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const settingsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique: true
  },
  theme: {
    type: String,
    enum: ['light', 'dark'],
    default: 'light'
  },
  notifications: {
    type: Boolean,
    default: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Settings', settingsSchema);
