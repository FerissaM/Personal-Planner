var express = require('express');
var router = express.Router();
const aboutCtrl = require('../controllers/about');

router.get('/new', aboutCtrl.new);

module.exports = router;