/**
 * @param {string} s
 * @return {boolean}
 * 题目：
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false
 */
var isPalindrome = function(s) {
    var result = '';
    for(var i=0;i<s.length;i++){
        if((s[i]>='a'&&s[i]<='z') || (s[i]>='A'&&s[i]<='Z') ||(s[i]>='0'&&s[i]<='9')){
            result = result + s[i].toLowerCase();
        }
    }
    return result===result.split('').reverse().join('');
};