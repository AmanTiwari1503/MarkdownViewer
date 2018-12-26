var express = require('express');
var mainController = require('../controllers/mainController');
var router = express.Router();
//console.log('here');
router.route('/').get(mainController.home);
router.route('/(:id)').get(mainController.newhome);

module.exports = router;