var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var user =  {name:'yg1',depart:'验估一科',pass:'123'};
  req.session.user = user;  
  res.render('index', { title: 'Express' });
});

module.exports = router;
