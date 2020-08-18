# Study_nodejs

#1st
==================basic.js========================

var는 변수 재선언 및 재할당 가능, 초기화 값 필요 없음 _ function scope

let은 변수 재선언 불가능, 재할당 가능, 초기화 값 필요 없음 _ block scope

const는 변수 재선언 및 재할당 불가능, 초기화 값 필수 _ block scope


==================scope.js========================

function scope : var은 function block만 scope으로 인정

block scope : let, const 는 코드 블록 내부에서만 scope으로 인정

함수에서의 Hoisting

=================json.js============================

console.log('dogs : ' + dogs);
-> 결과
dogs : [object Object],[object Object],[object Object] 현재 객체에 배열이 3개이므로 

console.log('dogs : ', dogs);
-> 결과
dogs :  [
    { name: '식빵', family: '웰시코기', age: 1, weight: 2.14 },
    { name: '콩콩', family: '포메라니안', age: 3, weight: 2.5 }, ]comma를 이용하면 객체와 객체 네 프로퍼티가 모두 출력
    
console.log('dogs :' + JSON.stringify(dogs));
-> 결과 str형식 
dogs :[{"name":"식빵","family":"웰시코기","age":1,"weight":2.14},

dogs.forEach(...
->for문처럼 돌아감

=====================function.js========================

함수 선언식, 함수 표현식, 화살표 이용하는 함수 등을 배움

=====================array.js===========================

배열의 선언 실습 , 같은 배열에 있어도 타입 다를 수 있다. 

기존 배열에 객체를 추가하는 방법
1. push() method 사용
2. array[array.length]="" 이용
3. array[100]= ... 특정 인덱스 이용

배열의 순회 실습 (for 문처럼 돌아가는 방법)
1. for (var item of array1) { str += item + ',';}
2. for (var item in array2) { str += array2[item] + ',';}
3. array3.forEach( item => str += item + ',' );




#2nd
=================promise.js=======================

fulfilled, rejected, resolved 이용

Pending 최초 생성된 시점의 상태

Fulfilled 작업이 성공적으로 완료된 상태 -> resolve()

Rejected 작업이 실패한 상태 -> reject()

=================main.js / calculator.js=============

1파일 = 1모듈

main.js에서 각 결과값을 출력하며 const modulename = require('file path')를 통해 calculator.js 모듈을 같이 사용

calculator.js에서 module.exports = calculator;를 이용하여 모듈을 export

==================async.js===========================

async : promise 사용 안하고도 효과적으로 callbackhell 해결, 암묵적으로 promise 반환

await : promise를 기다림. async로 정의된 내부에서만 사용 가능함

function promiseMain() 을 사용하던, async function asyncMain () 을 사용하던 둘다 같은 결과 값 출력 
