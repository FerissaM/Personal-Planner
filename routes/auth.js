const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../middleware/ensureLoggedIn');

// To protect and requires authentication
router.get('/protected-route', ensureLoggedIn, (req, res) => {
});

module.exports = router;
