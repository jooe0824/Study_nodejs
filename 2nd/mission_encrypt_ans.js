const crypto = require('crypto');
const fs = require('fs'); //이건 모듈 사용하기 위해서 항상 써줘야 한다

const encrypt = (salt, password) => {
    return new Promise((res, rej) => { //resolve, rejected
        crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) => {
            if (err) throw err;
            const digest = derivedKey.toString('hex');
            res(digest); //resolved(); 이거랑 같음. 작업 성공적으로 완료한 상태
        });
    });
}

fs.readFile(`${__dirname}/password.txt`, async (err, data) => {
    if (err) return console.log(err.message); 
    //fs_async 비동기로 파일 읽기, 에러일 경우 에러 메세지 출력

    const password = data.toString();  
    /*#########질문!#########
    여기서 data의 의미는 뭔가?
    */

    const salt = crypto.randomBytes(32).toString('hex');
    const digest = await encrypt(salt, password);
    
    fs.writeFile(`${__dirname}/hashed.txt`, digest, (err) => { 
        //fs.writeFile (file, data, [options], callback) 에서 data 대신 digest
        
        if (err) return console.log(err.message);
        console.log('success ~ ')
    });
});
