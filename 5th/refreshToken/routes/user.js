const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);

module.exports = router;

//middlewares 는 5th 에서 controllers-ex + login-ex 모두 합친 것 