var express = require('express');
var router = express.Router();
const contactCtrl = require('../controllers/contact');

router.get('/', contactCtrl.index);

module.exports = router;