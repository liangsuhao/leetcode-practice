/**
 * @param {string[]} strs
 * @return {string}
 * 题目：
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
 */
var longestCommonPrefix = function(strs) {

    var commonStr = strs[0];
    if(!commonStr)return "";
    for(var i=1;i<strs.length;i++){
        var j=0;
        while(strs[i][j]==commonStr[j]){
            if(j>=strs[i].length||j>=commonStr.length){
                break;
            }
            j++;
        }
        commonStr = commonStr.substr(0,j);
        if(commonStr=="")return commonStr;
    }

    return commonStr;
};