const express = require('express');
const router = express.Router();

// GET request for the calendar page
router.get('/', function(req, res, next) {
    res.render('calendar/index', { });
});

// POST request to handle adding an item to a specific day
router.post('/add-item', function(req, res, next) {
    // Extract the day and item information
    const { day, item } = req.body;

    // Redirect back to the calendar page after adding the item
    res.redirect('/calendar');
});

module.exports = router;