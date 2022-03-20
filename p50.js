/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 题目:
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn ）。

 

示例 1：

输入：x = 2.00000, n = 10
输出：1024.00000
示例 2：

输入：x = 2.10000, n = 3
输出：9.26100
示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25

方法：分治，复杂度(logN)
 */
 var myPow = function(x, n) {
    let result = 1,tmpNum = x,tmpN=n;
    if(n === 0) {
        return 1.0;
    } else if(n<0) {
        n = -1*n;
    }
    while(n>0) {
        if(n%2 === 1) {
            result = result * tmpNum;
        }
        tmpNum = tmpNum *tmpNum;
        n = parseInt(n/2);
        console.log(n)
    }
    if(tmpN < 0) {
        result = 1/result;
    }
    return result;
};