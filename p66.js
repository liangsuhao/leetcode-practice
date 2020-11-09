/**
 * @param {number[]} digits
 * @return {number[]}
 * 题目：
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。

 */
var plusOne = function(digits) {

    //先计算数组前面是否有0
    //投机取巧是不行的，数组长度过长转成整数型会溢出
    // var index = 0,num0 = '';
    // while(digits[index]===0 && index!=digits.length-1){
    //     index++;
    //     num0 += '0';
    // }

    // return (num0 + (parseInt(digits.join(''))+1).toString()).split('');

    digits[digits.length-1]++;
    for(var i=digits.length-1;i>=0;i--){
        if(digits[i]==10){
            digits[i]=0;
            if(i==0){
                digits.unshift(1);
            }else{
                digits[i-1]++;
            }
        }
    }
    return digits;
};