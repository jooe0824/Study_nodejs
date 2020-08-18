var express = require('express'); //express 모듈 불러오기
var router = express.Router(); //Router() 미들웨어 불러오기

router.get('/',(req,res) => { //get메소드로 api/요청이 들어오면 아래 로직 실행
    const result = { 
        status:200,
        message: 'blog에 접근'
    }
    res.status(200).send(result); 
});

/*#######질문########
router.get('/',(req,res) 여기서 (req, res)의 의미는 정확히?
*/
router.use('/blog', require('./blog')); //router.use()를 이용해서 생성한 폴더의 index.js에 접근

module.exports = router; //생성한 router 객체를 모듈로 변환