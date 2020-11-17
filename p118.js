/**
 * @param {number} numRows
 * @return {number[][]}
 * 题目：
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

 */
var generate = function(numRows) {
    if(numRows==0){
        return [];
    }
    if(numRows==1){
        return [[1]];
    }
    var start = [1],result=[[1]],tmp=[];
    for(var i=0;i<numRows-1;i++){
        start.push(0);
        start.unshift(0);
        tmp = [];
        for(var j=0;j<start.length-1;j++){
            tmp.push(start[j]+start[j+1]);
        }
        result.push(tmp);
        start = tmp.concat();  //深浅拷贝的问题
    }
    return result;
};