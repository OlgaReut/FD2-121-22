let x = null;
let y = null;

function getNumber(num) {
    if(x === null) {
        x = num
    } else {
        y = num
    }
}

let sign = '';

function getSign(sign1) {
    sign = sign1
}

let res = null;
function getResult(res) {
    // let res;
    switch (sign) {
        case '+': 
            res = x+y; 
            break;
        case '-':
            res = x-y;
            break;
        case '/':
            res = x/y;
            break;
        case '*':
            res = x*y;
            break;
        default:
            break;
    }
            
    console.log("result: ", res);
}
