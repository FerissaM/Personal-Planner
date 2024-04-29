const Task = require("../models/task");

module.exports = {
  monthly,
  day,
  addTask
};

const monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December',
];

function monthly(req, res) {
  let year = parseInt(req.query.year);
  let month = parseInt(req.query.month);
  if (month === -1) {
    year--;
    month = 11;
  } else if (month === 12) {
    year++;
    month = 0;
  }

  // Default to today's year and month if not specified
  if (!year) {
    const today = new Date();
    year = today.getFullYear();
    month = today.getMonth();
  }

  const daysInMo = new Date(year, month + 1, 0).getDate();
  const dow = new Date(year, month, 1).getDay() + 1;

  res.render('calendar/month', { year, month, monthNames, daysInMo, dow }); 
}


async function day(req, res) {
  const { year, month, day } = req.params;
  res.render('calendar/add-task', { year, month, day });
}

module.exports = {
  monthly,
  day,
};


async function addTask(req, res) {
  const { year, month, day } = req.params;
  const { title, description } = req.body;

  try {
    const date = new Date(year, month - 1, day);
    const task = new Task({
      user: req.user._id,
      title,
      description,
      date,
    });
    await task.save();

    // get tasks for that specific day
    const tasks = await Task.find({ user: req.user._id, date: date });

    // renders the page with tasks and form for adding new tasks
    res.render('calendar/day', { date, tasks });
  } catch (error) {
    console.error("Error adding task:", error);
    res.render('error', { message: 'Error adding task', error });
  }
}


module.exports = {
  monthly,
  day,
  addTask
};
