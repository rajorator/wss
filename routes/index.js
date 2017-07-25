var express = require('express');
var router = express.Router();
var benis = require('../bin/benefits');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(benis.length);
  res.render('index', { title: 'Express', benefits: benis });

});

module.exports = router;
