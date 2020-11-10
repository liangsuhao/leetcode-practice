/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 题目：
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

 

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
 

提示：

每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。
 */
var addBinary = function(a, b) {
    var result='',scale=0,add1=0,add2=0;
    for(var i=a.length-1,j=b.length-1; i>=0 || j>=0 || scale>0;i--,j--){
        if(!a[i]){
            add1 = '0';
        }else{
            add1 = a[i];
        }

        if(!b[j]){
            add2 = '0';
        }else{
            add2 = b[j];
        }
        if(parseInt(add1)+parseInt(add2)+scale==0){
            result = '0'+result;
            scale=0
        }else if(parseInt(add1)+parseInt(add2)+scale==1){
            result = '1'+result;
            scale=0
        }else if(parseInt(add1)+parseInt(add2)+scale==2){
            result = '0'+result;
            scale=1;
        }else if(parseInt(add1)+parseInt(add2)+scale==3){
            result = '1'+result;
            scale=1;
        }
    }
    return result;
};