const crypto = require('crypto');

const encrypt = (salt, password) => {
    crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) => {
        //pbkdf2(비밀번호, 솔트 값, 반복횟수, 출력byte, 해시 알고리즘, callback)
        if(err) throw err;
        const hashed = derivedKey.toString('hex');
        console.log('salt : ', salt);
        console.log('hashed : ', hashed);

    });
}

const password = 'fl0wer';
const salt = crypto.randomBytes(32).toString('hex'); //암호화 중 해싱할 때 추가되는 임의의 문자열
encrypt(salt, password);
