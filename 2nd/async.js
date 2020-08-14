//async : promise 사용 안하고도 효과적으로 callbackhell 해결, 암묵적으로 promise 반환
//await : promise를 기다림. async로 정의된 내부에서만 사용 가능함

let asyncFunc1 = (msg) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func1 : ${msg}`) // 함수명 : 인자 를 반환
        }, 1000)
    })

let asyncFunc2 = (msg) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func2 : ${msg}`)
        }, 1000)
    })

function promiseMain () {
    asyncFunc1('Hello').then((result)=>{
        console.log(result)
        return asyncFunc2('world')
    }).then((result) => {
        console.log(result)
    })
} // Promise

async function asyncMain () {
    let result = await asyncFunc1('Hello')
    console.log(result)
    result = await asyncFunc2('world')
    console.log(result)
} // async & await


promiseMain()
asyncMain()

/*결과 (1000ms 기다리기 때문에 텀이 약간 있다) : 
func1 : Hello
func1 : Hello
func2 : world
func2 : world
3번째 단락 PRomise를 쓰던, 4번째 단락 async&await을 쓰던 익숙한 것 사용 */