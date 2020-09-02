module.exports = {
    success: (status, message, data) => {
        return {
            status: status,
            success: true,
            message: message,
            data: data
        }
    },
    fail: (status, message) => {
        return {
            status: status,
            success: false,
            message: message //fail은 data가 없다.
        }
    },
};

//JSON 객체로 응답하기 
//modules 는 자주, 반복적으로 사용하는 message, code, util 로 나누어서 정리함