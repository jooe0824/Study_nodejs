const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const MSG = require('../modules/responseMessage');
const jwt = require('../modules/jwt');
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

module.exports = {
    localVerify : async (req, res) => {
        var token = req.headers.token;
            if (!token) {
                return res.json(util.fail(statusCode.BAD_REQUEST, MSG.EMPTY_TOKEN));
            }
            const user = await jwt.verify(token);
            if (user == TOKEN_EXPIRED) {
                return res.json(util.fail(statusCode.UNAUTHORIZED, MSG.EXPIRED_TOKEN));
            }
            if (user == TOKEN_INVALID) {
                return res.json(util.fail(statusCode.UNAUTHORIZED, MSG.INVALID_TOKEN));
            }
            if (user.userIdx == undefined) {
                return res.json(util.fail(statusCode.UNAUTHORIZED, MSG.INVALID_TOKEN));
            }
            return res.json(util.success(statusCode.OK, MSG.AUTH_SUCCESS));
    },

    //login-ex 에서는 이 모든게 routes/ auth.js 에 있었다면 
    //이전에 user.js 따로 빼준 것 처럼 이것도 controllers/auth.js로 따로 빼서 정리
    //routes 는 정말 방향만 주는 애로 만들어버리자!
    
    localReIssue : async (req, res) => {
        const refreshToken = req.headers.refreshtoken;
        if (!refreshToken) {
            return res.json(util.fail(statusCode.BAD_REQUEST, MSG.EMPTY_TOKEN));
        }
        const newToken = await jwt.refresh(refreshToken);
        if (newToken == TOKEN_EXPIRED) {
            return res.json(util.fail(statusCode.UNAUTHORIZED, MSG.EXPIRED_TOKEN));
        }
        if (newToken == TOKEN_INVALID) {
            return res.json(util.fail(statusCode.UNAUTHORIZED, MSG.INVALID_TOKEN));
        }
        res.status(statusCode.OK).send(util.success(statusCode.OK, MSG.ISSUE_SUCCESS, {accessToken: newToken}));
    }
}