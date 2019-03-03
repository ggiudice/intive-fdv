var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/*s

[
  '{{repeat(5, 10)}}',
  {
    index: '{{index()}}',
    name: '{{firstName()}}',
    surname: '{{surname()}}',
    birthdate: '{{date()}}',
    country: {
        name: '{{index()}}',
        alpha2Code: '{{country()}}'
      }
  }
]
    */