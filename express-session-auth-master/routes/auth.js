var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');

var authData = {
  email: 'juju0824@gmail.com',
  password: '111111', //hash라던지, 비밀번호 암호화를 해주어야 함
  nickname: 'juju'
}  //데이터 만들기

router.get('/login', function (request, response) {
  var title = 'WEB - login';
  var list = template.list(request.list);
  var html = template.HTML(title, list, `
    <form action="/auth/login_process" method="post">
      <p><input type="text" name="email" placeholder="email"></p>
      <p><input type="password" name="pwd" placeholder="password"></p>
      <p>
        <input type="submit" value="login">
      </p>
    </form>
  `, '');
  response.send(html);
});

router.post('/login_process', function (request, response) {
  var post = request.body;
  var email = post.email; //사용자가 전송한 데이터 첫번째
  var password = post.pwd;
  if(email === authData.email && password === authData.password){
    request.session.is_logined = true;
    request.session.nickname = authData.nickname; 
    request.session.save(function(){ //세션 스토어에 기록하는 작업 
      //스토어에 저장 끝난 후에 아래 리다이렉션 진행
      
      response.redirect(`/`); //로그인 성공시 홈 '/'으로 다시 redirect 해주기
      //response.send('Welcome'); //성공시에 welcome send 해주기 
      //이사람이 로그인을 했는지 알려줄 수 있는 정보, 페이지 접근할때마다 필요한 정보들 (ex.닉네임)
      //그러면 디비나 파일에 다시 접속할 필요가 없어짐 
    });
  } else {
    response.send('Who?');
  }
});

router.get('/logout', function (request, response) {
  request.session.destroy(function(err){ //session의 destroy 메소드 호출 -> 세션이 삭제 
    //이 callback은 세션에 대한 삭제가 다 끝난 다음에 호출되도록 약속이 되어 있다.
    response.redirect('/'); //다시 홈으로 
  }); //이렇게 되면 로그아웃 버튼 누른 즉시, 원래 있던 세션이 사라지고 새로운 세션 파일이 sessions/ 에 만들어지게 됨
  //나를 아예 새로운 사람으로 다시 인식한다는 것
});

module.exports = router;