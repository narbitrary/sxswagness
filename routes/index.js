var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  pageObject = { 
  	title: 'SXSWAGNESS'
  };
  res.render('index', pageObject);
});

module.exports = router;
