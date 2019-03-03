var express = require('express');
var jsonfile = require('jsonfile');
var router = express.Router();

var users = require('./users.json');


router.get('', function(req, res, next) {
  // TODO: Hacer la busqueda
    res.status(200).json(users);
});

/* GET user by id */
router.get('/:id', function(req, res, next) {

  

// TODO: Hacer la busqueda
  res.status(200).json(users[0]);
});

/* Save new user */
router.post('', function(req, res, next) {

  
  const userNew = req.body;

  // TODO: DEvolver el usuario con generado un id
  res.status(200).json(users[0]);
});

/* Save update user */
router.put('/:id', function(req, res, next) {

  
  const userNew = req.body;
  //buscar el usuario y actualizarlo

  // TODO: DEvolver el usuario con generado un id
  res.status(200).json(users[0]);
});

module.exports = router;