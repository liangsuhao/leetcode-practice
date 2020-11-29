/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 题目：
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
示例 1:

输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
示例 2:

输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G
 */
var convert = function(s, numRows) {
    var mapSel = [],flag = true,x=0,y=0,result = "";
    //初始化数组
    for(var i=0;i<numRows;i++){
        mapSel[i] = [];
    }
    mapSel[0][0] = s[0];
    for(var i=1;i<s.length;i++){
        if(flag){
            x++;
            if(x>numRows-1){
                x = x-2;
                y++;
                flag = !flag;
            }
        }else{
            x--;
            y++;
            if(x < 0){
                x = x+2;
                y--;
                flag = !flag;
            }
        }
        mapSel[x][y] = s[i];
    }

    for(var i=0;i<numRows;i++){
        for(var j=0;j<=y;j++){
            if(mapSel[i][j]){
                result += mapSel[i][j]; 
            }
        }
    }
    return result;
};