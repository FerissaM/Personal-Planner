const express = require('express');
const router = express.Router();
const calendarCtrl = require('../controllers/calendar');

// GET /calendar (calendar page)
router.get('/', calendarCtrl.monthly);

// GET /calendar/year/:year/month/:month/day/:day (day page)
router.get('/year/:year/month/:month/day/:day', calendarCtrl.day);

// POST for add task
router.post('/year/:year/month/:month/day/:day/add-task', calendarCtrl.addTask);

// POST for editing task
router.post('/year/:year/month/:month/day/:day/edit/:taskId', calendarCtrl.editTask);

// POST for deleting task
router.post('/year/:year/month/:month/day/:day/delete-task/:taskId', calendarCtrl.deleteTask);

module.exports = router;