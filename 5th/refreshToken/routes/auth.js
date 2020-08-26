const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth');

router.get('/local', AuthController.localVerify); //..controllers/auth 로 가서 실행
router.get('/local/reissue', AuthController.localReIssue);

module.exports = router;

//routes 는 방향만 제시하는 방향표지판 느낌이 되었다! 