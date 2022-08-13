/**
 * @param {string} s
 * @return {string}
 * 题目：
 * 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

 

示例 1：

输入：s = "bcabc"
输出："abc"
示例 2：

输入：s = "cbacdcbc"
输出："acdb"
 */
 var removeDuplicateLetters = function(s) {
    const sMap = new Map();
    const numFill = _.countBy(s);
    let result = '';
    for(let i = 0 ; i < s.length ; i++) {
        if(!sMap.get(s[i])) {
            while(result.length > 0 && result[result.length-1] > s[i]) {
                console.log(numFill)
                if(numFill[result[result.length-1]] > 0) {
                    sMap.set(result[result.length-1],null);
                    result = result.substring(0,result.length-1);
                } else {
                    break;
                }
            }
            sMap.set(s[i],s[i]);
            result += s[i];
        }
        numFill[s[i]]--;
    }
    return result;
};