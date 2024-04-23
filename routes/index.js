const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/indexController');
const { ensureLoggedIn } = require('connect-ensure-login');

router.get('/year/:year/month/:month/day/:day', indexCtrl.day);
router.post('/add-item', indexCtrl.addItem); // Define route for adding an item

router.get('/protected', ensureLoggedIn(), (req, res) => {
  res.send('You are authenticated and authorized to access this resource.');
});

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

  res.render('home', { year, month, monthNames, daysInMo, dow });
});

router.get('/calendar/:year/:month/:day', function(req, res, next) {
  debugger;
  const { year, month, day } = req.params;
  // Handle the click event on a specific day here
  // You can redirect to a specific route or perform any action you want
  res.redirect(`/details/${year}/${month}/${day}`); // Example: Redirect to a details page for the clicked day
});

router.use(function(req, res, next) {
  res.status(404).send('404 - Not Found');
});

module.exports = router;
