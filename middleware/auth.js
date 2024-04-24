const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth');

router.get('/protected-route', ensureAuthenticated, (req, res) => {

});

module.exports = router;
