const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  // Define monthNames array
  const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December',
  ];

  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const daysInMo = new Date(year, month + 1, 0).getDate(); // Get the number of days in the month
  const dow = new Date(year, month, 1).getDay() + 1; // Get the day of the week for the first day of the month

  // Render the home view with the necessary data
  res.render('home', { year, month, monthNames, daysInMo, dow });
});

module.exports = router;