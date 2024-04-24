const Task = require('../models/task');

const taskController = {
  // for creating a new task
  createTask: async (req, res) => {
    try {
      const { title, description } = req.body;
      // new task
      const newTask = new Task({
        title,
        description,
        user: req.user._id 
      });
      await newTask.save();
      res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create task' });
    }
  },

  // for getting all tasks for a user
  getAllTasks: async (req, res) => {
    try {
      // find all tasks associated with the user
      const tasks = await Task.find({ user: req.user._id });
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve tasks' });
    }
  },

  // for getting details of a specific task
  getTaskDetails: async (req, res) => {
    try {
      const taskId = req.params.id;
      // find the task by ID
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve task details' });
    }
  },

  // for updating a task
  updateTask: async (req, res) => {
    try {
      const taskId = req.params.id;
      const { title, description } = req.body;
      // find and update the task
      const updatedTask = await Task.findByIdAndUpdate(taskId, { title, description }, { new: true });
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json({ message: 'Task updated successfully', task: updatedTask });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update task' });
    }
  },

  // for deleting a task
  deleteTask: async (req, res) => {
    try {
      const taskId = req.params.id;
      // find and delete the task
      const deletedTask = await Task.findByIdAndDelete(taskId);
      if (!deletedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json({ message: 'Task deleted successfully', task: deletedTask });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete task' });
    }
  }
};

module.exports = taskController;
