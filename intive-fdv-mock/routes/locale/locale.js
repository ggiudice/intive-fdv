var express = require('express');
var jsonfile = require('jsonfile');
var router = express.Router();

var esJson = require('./es.json');
var frJson = require('./fr.json');
var enJson = require('./en.json');


/* GET lenguage by locale. */
router.get('/:localeId', function(req, res, next) {

  var ERROR = false;

  let locale = esJson;
  if(req.params.localeId == 'en') {
    locale = enJson;
  } else if (req.params.localeId == 'fr'){
    locale = frJson;
  }
  
  setTimeout(function () {
    if(!ERROR) {
      res.status(200).json(locale);
    } else {

      // No hay definidos codigos de errores.
      res.status(400).json({});
    }
  }, 300);
});

module.exports = router;

