var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/xxx', function(req, res, next){
  console.log('/xxx get 请求');
  res.send('{title:"Hello"}');
});

module.exports = router;
