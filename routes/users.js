var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var users = ["Ailec","Alice","Louis"]

router.get('/getUser', function(req, res, next) {
  res.send(users);// return list of users
});

router.get('/getUser/:id', function(req, res, next) {
  var arraylength = users.length;
  if(req.params.id <= arraylength - 1){
    res.send(users[req.params.id]);
  }
  
  res.sendstatus(404).send("User not found");
});

module.exports = router;
