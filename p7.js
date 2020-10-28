/**
 * @param {number} x
 * @return {number}
 * 
 * 题目：给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 */
var reverse = function(x) {
    let result = 0;
    while(x!==0){
        result = (result*10)+(x%10);
        x = (x/10)|0;
    }
    return (result | 0) === result ? result : 0;
};