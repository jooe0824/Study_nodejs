//로그인 인증 성공 후 sign method 를 통해 access token 발급
//npm install jsonwebtoken rand-token

const randToken = require('rand-token');
const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretKey').secretKey;
const options = require('../config/secretKey').options;
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

module.exports = {
    sign: async (user) => {
        const payload = {
            idx: user.userIdx,
            name: user.name
        };
        const result = {
            token: jwt.sign(payload, secretKey, options),
            refreshToken: randToken.uid(256)

            /*refresh Token 이란?
            ✔ Access Token이 만료되었을 때 새로 발급해주는 열쇠 
            ✔ Access Token과 함께 클라이언트에 발급
            ✔ 현재 액세스 토큰이 유효하지 않거나 만료될 때 새 액세스 토큰을 얻을 수 있음
            그냥 Access Token 기간을 길게 주어도 되지만 유지보수, 큰 어플 제작과정에서는 필요*/
        };
        return result;
    },
    verify: async (token) => {
        let decoded;
        try {
            decoded = jwt.verify(token, secretKey);
        } catch (err) {
            if (err.message === 'jwt expired') {
                console.log('expired token');
                return TOKEN_EXPIRED;
            } else if (err.message === 'invalid token') {
                console.log('invalid token');
                console.log(TOKEN_INVALID);
                return TOKEN_INVALID;
            } else {
                console.log("invalid token");
                return TOKEN_INVALID;
            }
        }
        return decoded;
    }
}