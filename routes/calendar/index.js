const express = require('express');
const router = express.Router();

// GET request for the calendar page
router.get('/', function(req, res, next) {
    res.render('calendar/index', { });
});

// POST request to handle adding an item to a specific day
router.post('/add-item', function(req, res, next) {
    // Extract the day and item information from the request body
    const { day, item } = req.body;

    // Logic to add the item to the specific day goes here

    // Redirect back to the calendar page after adding the item
    res.redirect('/calendar');
});

module.exports = router;