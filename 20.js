/**
 * @param {string} s
 * @return {boolean}
 * 题目：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
 */
var isValid = function(s) {
    var arr1 = ['(','[','{'];
    var arr2 = [')',']','}'];
    var tmp = 0,tmpArr = [];
    for(var i=0;i<s.length;i++){
        if(arr1.indexOf(s[i])!=-1){
            tmp++;
            tmpArr.push(s[i]);
        }else if(arr2.indexOf(s[i])!=-1){
            if(tmpArr==''||arr1.indexOf(tmpArr[tmpArr.length-1])==arr2.indexOf(s[i])){
                tmp--;
                if(tmp<0){
                    return false;
                }
                tmpArr.pop();
            }else{
                return false;
            }
        }
        
    }
    if(tmp==0){
        return true;
    }else{
        return false;
    }
};