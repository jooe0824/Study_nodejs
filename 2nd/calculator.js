var calculator = {
    add : (...args) => { // ..args 를 통해 arg 변수 여러개여도 가능
        return args.reduce((a,b) => {
            return a + b;
        });
    },
    substract : (...args) => {
        return args.reduce((a,b) => {
            return a - b;
        });
    },
    multiply : (...args) => {
        return args.reduce((a,b) => {
            return a * b;
        });
    },
    divide : (...args) => {
        return args.reduce((a,b) => {
            return a / b;
        });
    }
}

module.exports = calculator;
