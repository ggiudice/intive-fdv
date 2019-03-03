var express = require('express');
var jsonfile = require('jsonfile');
var router = express.Router();

var esJson = require('./es.json');
var frJson = require('./fr.json');
var enJson = require('./en.json');


/* GET lenguage by locale. */
router.get('/:localeId', function(req, res, next) {

  let locale = esJson;
  console.log(req.params.localeId)
  if(req.params.localeId == 'en') {
    console.log('entro en es')
    locale = enJson;
  } else if (req.params.localeId == 'fr'){
    console.log('entro en fr')
    locale = frJson;
  }

  res.status(200).json(locale);
});

module.exports = router;

