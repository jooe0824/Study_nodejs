/* -------------------- */
/*   1. 배열의 선언 실습    */
/* -------------------- */
//같은 배열에 있어도 타입이 서로 다를 수 있다 
var server1 = ["김해리", "손예지", 43, null, true];          // 배열 리터럴을 이용하는 방법
var server2 = Array("신윤재", "유가희", 13);     // Array 객체의 생성자를 이용하는 방법
var server3 = new Array("이현주", "조충범", false, undefined); // new 연산자를 이용한 Array 객체 생성 방법

console.log('server1 : ', server1);
console.log('server2 : ', server2);
console.log('server3 : ', server3);


/* -------------------- */
/*   2. 배열의 추가 실습    */
/* -------------------- */


server1.push(123);         // push() 메소드를 이용하는 방법, 맨 마지막에 123을 추가하게 된다.
server2[server2.length] = "뭐 넣지"; // length 프로퍼티를 이용하는 방법, 맨 마지막에 '뭐 넣지' 추가하게 된다.
server3[99] = "server3의 길이는 얼마일까요?"; // 특정 인덱스를 지정하여 추가하는 방법, 95개의 empty item 이 있다고 나온뒤 100번째에 등장  

console.log('server1 : ', server1);
console.log('server2 : ', server2);
console.log('server3 : ', server3);


/* -------------------- */
/*   3. 배열의 순회 실습    */
/* -------------------- */

let str1 = 'server1에는 "';
for (var item of server1) {
    str1 += item + ', ';
}
str1 += '"이 들어있네요 ~';
console.log(str1);

//        ---

let str2 = 'server2에는 "';
for (var item in server2) {
    str2 += server2[item] + ', '; //여기서 server2[item]이 아니라 그냥 Item을 쓰면 0,1,2,3, 이라고 출력
}
str2 += '"이(가) 들어있네요 ~';
console.log(str2);

//        ---

let str3 = 'server3에는 "';
server3.forEach( item => str3 += item + ', ');
str3 += '"이(가) 들어있네요 ~';
console.log(str3);