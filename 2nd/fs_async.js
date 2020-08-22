const fs = require('fs');

const numArr = [1, 2, 3, 4, 5];
/*
    data는 생성할 file에 적을 데이터
    fs.writeFile (file, data, [options], callback) {}
    비동기 방식으로 파일 쓰기 - 순서 확인해보기
*/
//numArr.forEach ((num) => {
//    const title = 'async' + num;
//    const data = `파일이 잘 만들어 졌어요!\n제 이름은 '${title}.txt'입니다 ~ `;
//    fs.writeFile (`${title}.txt`, data, (err, data) => {
//        if (err) return console.log (err.message);
//        console.log(`${title} 비동기라 순서가 뒤죽박죽 ~.~`);
//   });
//});

/*결과
sync1 비동기라 순서가 뒤죽박죽 ~.~
async2 비동기라 순서가 뒤죽박죽 ~.~
async3 비동기라 순서가 뒤죽박죽 ~.~
async5 비동기라 순서가 뒤죽박죽 ~.~
async4 비동기라 순서가 뒤죽박죽 ~.~
파일 2nd 안에 async1.txt, async2.txt....async5.txt가 만들어졌다. 
*/

/*
    fs.writeFile (file, data, [options], callback) {}
    비동기 방식으로 파일 불러오기 - 순서 확인해보기
*/
 numArr.forEach((num) => {
     const title = 'async' + num;
     fs.readFile(`${title}.txt`, (err, data) => {
         if (err) return console.log (err.message);
         console.log(`${title}.txt 파일에는 아래의 데이터가 있습니다. \n"${data}"\n`);
     });
 });

 /*결과
 async2.txt 파일에는 아래의 데이터가 있습니다. 
"파일이 잘 만들어 졌어요!
제 이름은 'async2.txt'입니다 ~ "

async5.txt 파일에는 아래의 데이터가 있습니다. 
"파일이 잘 만들어 졌어요!
제 이름은 'async5.txt'입니다 ~ "

async3.txt 파일에는 아래의 데이터가 있습니다. 
"파일이 잘 만들어 졌어요!
제 이름은 'async3.txt'입니다 ~ "

async4.txt 파일에는 아래의 데이터가 있습니다. 
"파일이 잘 만들어 졌어요!
제 이름은 'async4.txt'입니다 ~ "

async1.txt 파일에는 아래의 데이터가 있습니다. 
"파일이 잘 만들어 졌어요!
제 이름은 'async1.txt'입니다 ~ "



##########질문!###########
동기에서는 
fs.writeFileSync(`${title}.txt`, data);

비동기에서 fs.readFile (pathm [options], callback) 으로 이루어진 뒤 
callback <Function>
(err, data) => { logic } callback은 function이라 한줄로 끝나는 동기코드와는 다르게 
함수로 이루어져 있는듯. 
*/