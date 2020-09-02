/* 미리 설정해놓아야 하는 것 
config/database.js 
modules/pool.js 생성 
MySQL - user Table
5차 세미나에서 배운 pool , 
*/

const poolPromise = require('../config/database');
module.exports = { 
    queryParam: async (query) => {
        return new Promise ( async (resolve, reject) => {
            try {
                const pool = await poolPromise;
                const connection = await pool.getConnection(); //connection pool에서 connection 가져옴
                try {
                    const result = await connection.query(query);
                    //connection.query(querystring, [valuestring]) 
                    pool.releaseConnection(connection); //pool 사용 종료
                    // 반남 안하면 connection 쌓여서 connection leak 현상 발생
                    resolve(result);
                } catch (err) {
                    pool.releaseConnection(connection);
                    reject(err);
                }
            } catch (err) {
                reject(err);
            }
        });
    },
    queryParamArr: async (query, value) => {
        return new Promise(async (resolve, reject) => {
            try {
                const pool = await poolPromise;
                const connection = await pool.getConnection();
                try {
                    const result = await connection.query(query, value);
                    pool.releaseConnection(connection);
                    resolve(result);
                } catch (err) {
                    pool.releaseConnection(connection);
                    reject(err);
                }
            } catch (err) {
                reject(err);
            }
        });
    },  //query: 랑 다 똑같다, async(query) 냐 , async(query, value) 만 다르다.
    Transaction: async (...args) => {
        return new Promise(async (resolve, reject) => {
            try {
                const pool = await poolPromise;
                const connection = await pool.getConnection();
                try {
                    await connection.beginTransaction(); //transaction 적용 시작
                    args.forEach(async (it) => await it(connection));
                    await connection.commit(); //transaction 내 모든 쿼리 완료 후 결과 반영
                    pool.releaseConnection(connection);
                    resolve(result);
                } catch (err) {
                    await connection.rollback() // 모든 쿼리가 정상 종료 하지 못했다면 롤백, 원상태로 돌려 놓기
                    pool.releaseConnection(connection);
                    reject(err);
                }
            } catch (err) {
                reject(err);
            }
        });
    }
}