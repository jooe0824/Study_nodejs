var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session') //미들웨어를 모듈로써 설치 
var FileStore = require('session-file-store')(session)

var app = express()

app.use(session({ //사용자 요청이 있을 때마다 아래 코드 실행하도록 약속 
    //session이라는 함수를 실행시키면 session이 시작되고 
    //미들웨어가 내부적으로 개입해서 우리 어플리케이션이 세션을 사용할 수 있도록 처리
    secret: 'asadlfkj!@#!@#dfgasdg', 
    resave: false,
    saveUninitialized: true,
    store:new FileStore()
}))

app.get('/', function (req, res, next) {
    console.log(req.session);
    if(req.session.num === undefined){
        req.session.num = 1;
    } else {
        req.session.num =  req.session.num + 1;
    }
    res.send(`Views : ${req.session.num}`);
})

app.listen(3000, function () {
    console.log('3000!');
});