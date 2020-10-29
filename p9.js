/**
 * @param {number} x
 * @return {boolean}
 * 题目：判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */
var isPalindrome = function(x) {
    x = x.toString();
    return x==x.split('').reverse().join('');
};


/**
 * @param {number} x
 * @return {boolean}
 * 不转字符串的
 */
var isPalindrome = function(x) {
    var tmp=0;
    var xx=x;
    while(x!=0){
        tmp = tmp*10 + x%10;
        x = parseInt(x/10);
    }

    return xx<0?false:xx==tmp;
};