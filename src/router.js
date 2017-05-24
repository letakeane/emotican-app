var express = require('express');
var router = express.Router();
var controller = require('./controller');

  router.post('/emotions', controller.getEmotionAnalysis)

module.exports = router;
