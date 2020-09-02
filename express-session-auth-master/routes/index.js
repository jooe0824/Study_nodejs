var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var auth = require('../lib/auth'); // 이렇게 해주고 난 뒤 authStatusUI -> auth.StatusUI 라 변경

/*
function authIsOwner(request, response){
  if(request.session.is_logined) {
    return true;
  } else {
    return false;
  }

}

function authStatusUI(request, response){
  var authStatusUI =  '<a href="/auth/login">login</a>'
  if(authIsOwner(request,response)) {
    authStatusUI = '${request.session.nickname} | <a href= "/auth/logout">logout</a>';
  }
  //이건 템플릿 사용시에 로그인이 된 후에 로그아웃 글씨로 바꿔주기 위해서이며 
  //이 때 닉네임을 가져와서 UI에 보여줌
이 두개는 auth와 관련되어 있으므로 lib/auth.js 로 따로 뺀다
  */

router.get('/', function (request, response) {
  //console.log(request.session);

  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `
      <h2>${title}</h2>${description}
      <img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px;">
      `,
    `<a href="/topic/create">create</a>`,
    auth.statusUI(request, response)
  );
  response.send(html);
});

module.exports = router;