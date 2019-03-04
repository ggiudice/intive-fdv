var express = require('express');
var jsonfile = require('jsonfile');
var router = express.Router();

var users = require('./users.json');

// TODO: Implement these methods
/* GET user all */
router.get('', function(req, res, next) {
  res.status(200).json(users);
});

/* GET user by id */
router.get('/:id', function(req, res, next) {
  res.status(200).json(users[0]);
});

/* Save new user */
router.post('', function(req, res, next) {
  res.status(200).json(users[0]);
});

/* Save update user */
router.put('/:id', function(req, res, next) {
  res.status(200).json(users[0]);
});

module.exports = router;