const express = require('express');
const router = express.Router();

// GET request for the calendar page
router.get('/', function(req, res, next) {
    // Render the calendar view
    res.render('calendar/index', { });
});

// GET request for a specific date on the calendar
router.get('/:year/:month/:day', function(req, res, next) {
    const { year, month, day } = req.params;
    // Handle fetching data or performing actions related to the specified date
    res.send(`Displaying information for ${year}-${month}-${day}`);
});

module.exports = router;
