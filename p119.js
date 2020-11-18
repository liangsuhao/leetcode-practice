/**
 * @param {number} rowIndex
 * @return {number[]}
 * 题目：
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 3
输出: [1,3,3,1]
 */
var getRow = function(rowIndex) {
    if(rowIndex==0){
        return [1];
    }

    var start=[1],result=[];
    for(var i=0;i<rowIndex;i++){
        result = [];
        start.push(0);
        start.unshift(0);
        for(var j=0;j<start.length-1;j++){
            result.push(start[j]+start[j+1]);
        }
        start = result.slice();
    }
    return result;
};