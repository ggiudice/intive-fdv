var express = require('express');
var jsonfile = require('jsonfile');
var router = express.Router();

var countries = require('./countries.json');

/* GET all country */
router.get('/all', function(req, res, next) {
  res.status(200).json(countries);
});

module.exports = router;

