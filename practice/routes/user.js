var express = require('express');
var router = express.Router();
let UserModel = require('../models/user');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');

/* 
    ✔️ sign up
    METHOD : POST
    URI : localhost:3000/user/signup
    REQUEST BODY : id, name, password, email
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/

// 간단 Postman 이용해서 post 확인 
// router.post('/signup', async (req, res) => {
//     const { id, name, password, email } = req.body;
//     User.push({id, name, password, email});
//     res.status(200).send(User);
//     });

// 2단계
// router.post('/signup', async (req, res) => {
//     const { id, name, password, email } = req.body;
     // request data 확인 - id, name, pw, emial 틀리면 bad request return
//     if ( !id || !name || !password || !email ) {
//         return res.status(400).send({ message: 'BAD REQUEST' });
//     }
//     //already ID
//     //.filter() 주어진 배열의 조건을 통과하는 모든 요소를 모아 새로운 배열로 반환해줌
//     if (User.filter(user => user.id == id).length > 0) {
//         return res.status(400).send({ message: 'ALREADY ID' });
//     }
//
//     User.push({id, name, password, email});
//     res.status(200).send(User);
// });


// 3단계
router.post('/signup', async (req, res) => {
    const {
        id,
        name,
        password,
        email
    } = req.body;
    //2단계와 같음 (띄어쓰기 한 것만 다름)
    // request data 확인 - 없다면 Null Value 반환
    if (!id || !name || !password || !email) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE)); //modules/util.js 에 보면 fail: (status, message) 이거 사용한 것
        return;
    }
    //2단계에선 return res.status(400).send({ message: 'ALREADY ID' });, 3단계에선 JSON 객체로 응답
    
    //already ID
    if (UserModel.filter(user => user.id == id).length > 0) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID));
        return;
    }
    UserModel.push({
        id,
        name,
        password,
        email
    });
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CREATED_USER, {
            userId: id
        }));
});

/* 
    ✔️ sign in 로그인 하는 것 
    METHOD : POST
    URI : localhost:3000/user/signin
    REQUEST BODY : id, password
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/


router.post('/signin', async (req, res) => {
    const {
        id,
        password
    } = req.body;
    // request body 에서 데이터 가져오기, sign in 은 id, pw 만 있으면 된다

    if (!id || !password ) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE)); //modules/util.js 에 보면 fail: (status, message) 이거 사용한 것
        return;
    }
    // request data 확인 - 없다면 Null Value 반환
  
    const user = UserModel.filter(user => user.id == id );
    //filter 이용해서 user const 에 id 있는지 확인
    if(user.length == 0)
    { // user.length == 0 이라는건 user 가 없다는 것 
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
        return;
    }
    // 존재하는 아이디인지 확인 - 없다면 No user 반환 

    if (user[0].password !== password ){ 
        //user[]의 pwd 가 맞지 않다면 
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.MISS_MATCH_PW));
        return;
    }
    // 비밀번호 확인 - 없다면 Miss match password 반환

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.LOGIN_SUCCESS, {userId: id}));
    // 성공 - login success와 함께 user Id 반환, 성공시엔 return; 없음

});

/* 
    ✔️ get profile 프로필 조회 구현 
    METHOD : GET
    URI : localhost:3000/user/profile/:id
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User Id, name, email
*/


router.get('/profile/:id', async (req, res) => {
    const id = req.params.id;
    const user = user.filter(user => user.id == id)[0]; 
    // request params 에서 데이터 가져오기
    
    if (user == undefined){ 
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
        return;
    }
    // 존재하는 아이디인지 확인 - 없다면 No user 반환
    
    const profile = {
        id: user.id,
        name: user.name, 
        email: user.email
    }
    //pwd 제외하고 가져오기

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.LOGIN_SUCCESS, profile)
            );
    // 성공 - login success와 함께 user Id 반환
});


module.exports = router;