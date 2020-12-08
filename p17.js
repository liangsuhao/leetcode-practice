/**
 * @param {string} digits
 * @return {string[]}
 * 题目：
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */
var letterCombinations = function(digits) {
    if(digits == ""){
        return [];
    }
    var num2code = {
        '2' : ['a','b','c'],
        '3' : ['d','e','f'],
        '4' : ['g','h','i'],
        '5' : ['j','k','l'],
        '6' : ['m','n','o'],
        '7' : ['p','q','r','s'],
        '8' : ['t','u','v'],
        '9' : ['w','x','y','z']
    };
    var tmp = digits[0],len = digits.length,tmpArr=[];
    for(var i=1;i<len;i++){
        tmpArr = [];
        for( var j=0;j<num2code[tmp].length;j++){
            for(var k=0;k<num2code[digits[i]].length;k++){
                tmpArr.push(num2code[tmp][j]+num2code[digits[i]][k]);
            }
        }
        tmp += digits[i];
        num2code[tmp] = tmpArr;
    }
    return num2code[digits];
};