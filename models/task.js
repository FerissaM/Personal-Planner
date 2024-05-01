const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new mongoose.Schema({      
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const taskSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100
  },
  description: String,
  date: Date,
  deadline: Date,
  completed: {
  type: Boolean,
  default: false,
  maxlength: 500
  },
  notes: [noteSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);