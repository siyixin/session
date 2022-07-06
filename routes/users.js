var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.user){
    res.send('你好，'+req.session.user.depart);
  }
  else{
    res.send('未登录。')
  }
});

module.exports = router;
