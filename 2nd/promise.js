//Pending 최초 생성된 시점의 상태
//Fulfilled 작업이 성공적으로 완료된 상태 -> resolve()
//Rejected 작업이 실패한 상태 -> reject()

const func1 = (param) => {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            console.log('func1 return resolved');
            resolved(`func 1 success: ${param}`);
        }, 500);
    });
}

const func2 = (param) => {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
                console.log('func2 return rejected');
                rejected(new Error(`func2 param: '${param}'`));
            }, 500);
    });
}

const func3 = (param) => {
    return new Promise((resolved, rejected) => {
        setTimeout (() => {
                console.log('func3 return resolved');
                resolved(`func 3 success: ${param}\n`);
            }, 500);
    });
}

const func4 = (param) => {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
                console.log('func4 return rejected');
                rejected(Error(`func 4 error: ${param}\n`));
            }, 500);
    });
}

const func5 = (param) => {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
                console.log('func5 return resolved');
                resolved(`func 5 success: ${param}\n`);
            }, 500);
    });
}

const promise = func1('sopt')

/*
    .then(func2) 은
    .then((result) => func2(result)) 와 동일
    아래는 promise 객체인 func1 ~ func5 를 then으로 연쇄적으로 실행
*/
promise
    .then(func2)
    .then(func3)
    .catch(console.error) // errorhandler1
    .then(func4)
    .then(func5)
    .catch(console.error) // errorhandler2
    .then(console.log);

/* 홀수 번호가 붙은 함수는 resolved return 작업 성공적으로 완료
짝수 번호가 붙은 함수는 rejected return, 오류 냄