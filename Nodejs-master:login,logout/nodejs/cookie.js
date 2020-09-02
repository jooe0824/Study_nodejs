var http = require('http');
var cookie = require('cookie');

http.createServer(function(request, response){
    console.log(request.headers.cookie);
    //yummy_cookie=choco; tasty_cookie=strawberry
    var cookies = {};
    if(request.headers.cookie !== undefined){
        cookies = cookie.parse(request.headers.cookie); //nodejs가 주는 문자열을 집어넣기
    }
    console.log(cookies); 
    //결과 : { yummy_cookie: 'choco', tasty_cookie: 'strawberry' }
    console.log(cookies.yummy_cookie);
    //결과 : choco
     response.writeHead(200, {//성공이면 200
         'Set-Cookie':[
             'yummy_cookie=choco', 
             'tasty_cookie=strawberry',
             `Permanent=cookies; Max-Age=${60*60*24*30}`, // permanent cookie 만료는 한달 후
             'Secure=Secure; Secure', //앞은 쿠키이름과 값이고 ; 세미콜론 뒤에 나온게 의미 있는 것 
             'HttpOnly=HttpOnly; HttpOnly', //httpOnly 로 보안해서 jsp로 뺏기지 않도록
             'Path=Path; Path=/cookie', // /cookie 디렉토리 하위에서만 쿠키 존재
             'Domain=Domain; Domain=o2.org' //o2.org 도메인에서 이 쿠키가 남게됨
            ] 
     });//key-value의 형식으로 response, 복수의 cookie라면 배열 사용
    response.end('Cookie!!');
}).listen(3000); 