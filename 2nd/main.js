//main.js 는 각 결과값을 출력하는 코드
//1파일 = 1모듈이다. 
const calculator = require('./calculator');
//const modulename = require('file path')를 통해 calculator.js 모듈을 같이 사용하고 있다.

var addResult = calculator.add(1,3,5,7);
console.log("add result : ", addResult);

var subResult = calculator.substract(5,1);
console.log("substract result : ", subResult);

var multiplyResult = calculator.multiply(3,3);
console.log("multiply result : ", multiplyResult);

var divideResult = calculator.multiply(3,3);
console.log("multiply result : ", divideResult);

/* node main.js 결과 
add result :  16
substract result :  4
multiply result :  9
multiply result :  9
*/