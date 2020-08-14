//let isMomHappy = true;
let isMomHappy = false;
let phone = {
    brand: 'Samsung',
    color: 'black'
};

var willIGetNewPhone = new Promise(
    function(resolve, reject) {
        if (isMomHappy) {
            resolve(console.log('results : ', phone)); //fulfilled, phone 객체 (,) comma이용
        } else {
            var reason = new Error('mom is not happy'); //error로 나타내기 
            reject(Reason); //rejected
        }
    }
);
