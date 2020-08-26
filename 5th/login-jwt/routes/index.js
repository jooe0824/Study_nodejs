var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/user', require('./user')); //localhost:3000/user...
router.use('/auth', require('./auth')); //localhost:3000/auth...

module.exports = router;
