/*##########질문!!!############
왜 이렇게 하면 fs가 buffer로 읽혀질까? console.log(pwd)에서
*/

const crypto = require('crypto');
const fs = require('fs');

const pwd = fs.readFileSync('${__dirname}/password.txt');
console.log(pwd);

const encrypt = (salt, password) => {
    crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) => {
        //pbkdf2(비밀번호, 솔트 값, 반복횟수, 출력byte, 해시 알고리즘, callback)
        if(err) throw err;
        const hashed = derivedKey.toString('hex');
        console.log('salt : ', salt);
        console.log('hashed : ', hashed);
    });
}

const salt = crypto.randomBytes(32).toString('hex'); //암호화 중 해싱할 때 추가되는 임의의 문자열
const data = encrypt(salt, pwd);
fs.writeFileSync('hashed.txt', data);
