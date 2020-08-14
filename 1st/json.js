/* -------------------- */
/*   1. JSON 객체 실습    */
/* -------------------- */

var sopt = {
    name : 'OUR SOPT',
    slogan : 'WE LEAD OUR SOPT',
    part : ['plan', 'design', 'android', 'iOS', 'server'],
    number : 180,
    printName : function () {
        console.log('name : ', this.name )
    },
    printNum : function () {
        console.log('number : ', this.number )
    }
};

console.log('typeof sopt : ' + typeof sopt);
//typeof sopt : object

// + 와 , 의 차이가 무엇인지 
console.log('sopt : ' + sopt);
//sopt : [object Object]

console.log('sopt : ', sopt);
/*sopt :  {
    name: 'OUR SOPT',
    slogan: 'WE LEAD OUR SOPT',
    part: [ 'plan', 'design', 'android', 'iOS', 'server' ],
    number: 180,
    printName: [Function: printName],
    printNum: [Function: printNum]
  } var sopt의 모든 프로퍼티가 출력*/

console.log('sopt :' + JSON.stringify(sopt));
//str형태로 출력 , sopt :{"name":"OUR SOPT","slogan":"WE LEAD OUR SOPT","part":["plan","design","android","iOS","server"],"number":180}

sopt.printName();//name :  OUR SOPT
sopt.number = 190;
sopt.printNum();//number :  190 갱신되었다 


/* -------------------- */
/*   2. JSON 배열 실습    */
/* -------------------- */

var dogs = [
    { name: '식빵', family: '웰시코기', age: 1, weight: 2.14},
    { name: '콩콩', family: '포메라니안', age: 3, weight: 2.5},
    { name: '두팔', family: '푸들', age: 7, weight: 3.1}
];


console.log('dogs : ' + dogs);
//dogs : [object Object],[object Object],[object Object] 현재 객체에 배열이 3개이므로
console.log('dogs : ', dogs);
/*dogs :  [
    { name: '식빵', family: '웰시코기', age: 1, weight: 2.14 },
    { name: '콩콩', family: '포메라니안', age: 3, weight: 2.5 },
    { name: '두팔', family: '푸들', age: 7, weight: 3.1 }
  ] comma를 이용하면 객체와 객체 내 프로퍼티가 모두 출력*/
console.log('dogs :' + JSON.stringify(dogs));
//str형식 dogs :[{"name":"식빵","family":"웰시코기","age":1,"weight":2.14},
//{"name":"콩콩","family":"포메라니안","age":3,"weight":2.5},{"name":"두팔","family":"푸들","age":7,"weight":3.1}]

console.log(dogs[1].name);
//콩콩 dog 객체이름[몇번째].key이름

dogs.forEach( 
    dog => console.log(dog.name+'이는 종이 '+dog.family+'이고, 나이가 '+dog.age+'세입니다 ~')
    );
/*식빵이는 종이 웰시코기이고, 나이가 1세입니다 ~
콩콩이는 종이 포메라니안이고, 나이가 3세입니다 ~
두팔이는 종이 푸들이고, 나이가 7세입니다 ~ dog 배열 돌아가면서 출력 */

    