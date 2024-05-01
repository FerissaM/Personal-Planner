const Task = require("../models/task");

const monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December',
];

async function create(req, res) {
    const { year, month, day } = req.params;
    const date = new Date(year, month - 1, day);
    try {
        const task = await Task.findById(req.params.id);
        req.body.user = req.user._id;
        task.notes.push(req.body);
        await task.save();
        res.redirect(`/calendar/year/${year}/month/${month}/day/${day}/task/${task._id}`)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    create
};