const pool = require('../modules/pool');
const table = 'user';

const user = {
    signup: async (id, name, password, salt, email) => {
        const fields = 'id, name, password, salt, email';
        const questions = `?, ?, ?, ?, ?`;
        const values = [id, name, password, salt, email];
        const query = `INSERT INTO ${table}(${fields}) VALUES(${questions})`;
        try {
            const result = await pool.queryParamArr(query, values);
            const insertId = result.insertId;
            return insertId;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('signup ERROR : ', err.errno, err.code);
                throw err;
            }
            console.log('signup ERROR : ', err);
            throw err;
        }
    },
    checkUser: async (id) => { //param은 id
        const query = `SELECT * FROM ${table} WHERE id="${id}"`; //id를 table에서 찾기
        try {
            const result = await pool.queryParam(query); //modules/pool.js 사용 
            if (result.length === 0) {
                return false;
            } else return true;
        } catch (err) { 
            if (err.errno == 1062) {
                console.log('checkUser ERROR : ', err.errno, err.code);
                throw err;
            }
            console.log('checkUser ERROR : ', err);
            throw err;
        } //error 난다면
        //@@@sign up 에서 checkUser 는 내가 아이디와 비번을 입력 시, 그 아이디가 이미 있는지 확인
    },

    getUserById: async (id) => {
        const query = 'SELECT * FROM ${table} WHERE id=?' ;// query문 작성
        try{ 
            return await pool.queryParam(query, [id]);// pool module로 전달해서 결과값 받기
            //queryParam [id] 쿼리문 안에 ?물음표가 들어간다면, 순서에 맞게 들어갈 변수들이 배열 형식으로 들어간다는 뜻 
            //query 안에 실행할 쿼리 입력하는 것 

        } catch (err) {
            if (err.errno == 1062) {
                console.log('getUserbyID ERROR : ', err.errno, err.code);
                throw err;
            }
            console.log('getUserbyID ERROR : ', err);
            throw err;
        }// try - catch로 ERROR 받기    
        //@@@sign in 에서 getUserbyID 는 아이디를 입력했는데 그 아이디를 갖고 있는 사용자가 없다는 것을 반환 
    },
}

module.exports = user;