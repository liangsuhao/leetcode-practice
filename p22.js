/**
 * @param {number} n
 * @return {string[]}
 * 题目：
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例：

输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]
 */
var generateParenthesis = function(n) {
    // var result = [],tmp = [];动态规划有点行不通
    // result[0] = [];
    // result[1] = [['()']];
    // result[2] = ['()()','(())'];
    // for(var i=3;i<=n;i++){
    //     tmp = 
    // }
    //递归的方法
    var result = [];
    parenthesis(n,n,'',n,result);
    return result;
    
};

var parenthesis = function(lparenthesis,rparenthesis,str,n,result){
    if(str.length == 2*n){
        result.push(str);
        return;
    }

    if(lparenthesis > 0){
        parenthesis(lparenthesis-1,rparenthesis,str+'(',n,result);
    }else if(lparenthesis < rparenthesis){
        parenthesis(lparenthesis,rparenthesis-1,str+')',n,result);
    }
}