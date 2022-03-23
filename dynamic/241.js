/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const calculate = function(num1,num2,simbol) {
        if(simbol === '+') {
            return num1+num2;
        } else if(simbol === '-') {
            return num1-num2;
        } else if(simbol === '*') {
            return num1*num2;
        }
    }
    let simbol = ['+','-','*'];
    let numbers = [],simbols = [],tmp = '';
    for(let i=0;i<expression.length;i++) {
        if(simbol.indexOf(expression[i]) !== -1) {
            simbols.push(expression[i]);
            numbers.push(parseInt(tmp));
            tmp = '';
        } else {
            tmp += expression[i];
        }
    }
    numbers.push(parseInt(tmp));
    const divide = function(numbers,simbols) {
        if(simbols.length == 0) {
            return [numbers[0]];
        }
        let re = [];
        for(let i=0;i<simbols.length;i++) {
            let left = divide(numbers.slice(0,i+1),simbols.slice(0,i));
            let right = divide(numbers.slice(i+1,numbers.length),simbols.slice(i+1,simbols.length));
            for(let m=0;m<left.length;m++) {
                for(let n=0;n<right.length;n++) {
                    re.push(calculate(left[m],right[n],simbols[i]));
                }
            }
        }
        return re;
    }
    return divide(numbers,simbols);
};