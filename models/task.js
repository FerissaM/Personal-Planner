const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
}, { timestamps: true });

const taskSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: String,
  deadline: Date,
  completed: {
    type: Boolean,
    default: false
  },
  notes: [noteSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);
