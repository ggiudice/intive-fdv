var express = require('express');
var jsonfile = require('jsonfile');
var router = express.Router();

var esJson = require('./es.json');
var enJson = require('./en.json');


/* GET lenguage by locale. */
router.get('/:locale', function(req, res, next) {

  let locale = esJson;
  
  if(req.params.locale === 'en') {
    locale = enJson;
  }

  res.status(200).json(locale);
});

module.exports = router;

