const express = require('express');
const router = express.Router();

const monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December',
];

router.get('/', function(req, res, next) {
  // Default to today's year and month if not specified
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMo = new Date(year, month + 1, 0).getDate();
  const dow = new Date(year, month, 1).getDay() + 1;

  res.render('index', { year, month, monthNames, daysInMo, dow }); 
});

router.get('/calendar', function(req, res, next) {
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

  res.render('index', { year, month, monthNames, daysInMo, dow }); 
});

module.exports = router;
