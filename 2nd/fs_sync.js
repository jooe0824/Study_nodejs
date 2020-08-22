const fs = require('fs');

const numArr = [1, 2, 3, 4, 5];  //numberArray

/*
@111111111111111
   fs.writeFileSync ( file, data, [options]) {}
   동기 방식으로 파일 쓰기 - 순서 확인해보기
   비동기 방식은 파라미터 마지막에 무조건 'callback'이 있다
*/

//numArr.forEach((num) => {
//   const title = 'sync' + num;
//   const data = `파일이 잘 만들어 졌어요!\n제 이름은 '${title}.txt'입니다 ~ `;
//   fs.writeFileSync(`${title}.txt`, data);
//   console.log(`${title} 동기라 순서에 맞게 ~.~`);
//});

/*
결과
sync1 동기라 순서에 맞게 ~.~
sync2 동기라 순서에 맞게 ~.~
sync3 동기라 순서에 맞게 ~.~
sync4 동기라 순서에 맞게 ~.~
sync5 동기라 순서에 맞게 ~.~
그런 뒤 2nd 파일 안에 sync1.txt, sync2.txt....sync5.txt 가 data가 담긴 상태로 만들어졌음
*/

/*
@222222222
   fs.readFileSync ( path, [options]) {}
   동기 방식으로 파일 불러오기 - 순서 확인해보기
*/

 numArr.forEach((num) => {
     const title = 'sync' + num;
     const data = fs.readFileSync(`${title}.txt`);
     console.log(`${title}.txt 파일에는 아래의 데이터가 있습니다. \n"${data}"\n`);
 });

 /*결과
 sync1.txt 파일에는 아래의 데이터가 있습니다. 
"파일이 잘 만들어 졌어요!
제 이름은 'sync1.txt'입니다 ~ "

sync2.txt 파일에는 아래의 데이터가 있습니다. 
"파일이 잘 만들어 졌어요!
제 이름은 'sync2.txt'입니다 ~ "

sync3.txt 파일에는 아래의 데이터가 있습니다. 
"파일이 잘 만들어 졌어요!
제 이름은 'sync3.txt'입니다 ~ "

sync4.txt 파일에는 아래의 데이터가 있습니다. 
"파일이 잘 만들어 졌어요!
제 이름은 'sync4.txt'입니다 ~ "

sync5.txt 파일에는 아래의 데이터가 있습니다. 
"파일이 잘 만들어 졌어요!
제 이름은 'sync5.txt'입니다 ~ "
*/