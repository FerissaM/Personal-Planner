const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');

router.post('/calendar/year/:year/month/:month/day/:day/:id/notes', notesCtrl.create);

module.exports = router;