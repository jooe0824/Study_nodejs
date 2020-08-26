const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/signup', userController.signup); 
//const userController 는 ../controllers/user 이용

router.post('/signin', userController.signin);
router.get('/profile/:id', userController.readProfile);

module.exports = router;

//routes/ 는 특정 엔드포인트에 대한 클라 요청에 애플리케이션이 응답하는 방법을 결정한다면
//controller/ 는 모델로부터 요청된 데이터를 얻어내거나, 사용자에게 맞는 http response 전달

//원래 user.js 가 ~~~~~ 엄청 길었는데 이 긴 부분 콜백 함수 부분을 controller 로 옮기기만 하면 됨!
//Request -> server(controller) -> model -> database (구조)