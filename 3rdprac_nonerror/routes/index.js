var express = require('express');
var router = express.Router();
// 위의 모듈들 사용하겠다.

router.use('/user', require('./user'));
// 이러면 localhost:3000/user/signup , localhost:3000/user/signin ...등

module.exports = router; // 꼭 적어주어야 함
