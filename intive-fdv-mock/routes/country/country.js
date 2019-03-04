var express = require('express');
var jsonfile = require('jsonfile');
var router = express.Router();

var countries = require('./countries.json');

/* GET all country */
router.get('/all', function(req, res, next) {
  var ERROR = false;
  setTimeout(function () {
    if(!ERROR) {
      res.status(200).json(countries);
    } else {

      // No hay definidos codigos de errores.
      res.status(400).json({});
    }
  }, 300);
});

module.exports = router;

