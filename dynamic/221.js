/**
 * @param {character[][]} matrix
 * @return {number}
 题目：
 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

 

示例 1：


输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4
示例 2：


输入：matrix = [["0","1"],["1","0"]]
输出：1
示例 3：

输入：matrix = [["0"]]
输出：0
 */
var maximalSquare = function(matrix) {
    let arr = [],result = 0;
    for(let i=0;i<matrix.length;i++) {
        arr[i] = [];
    }
    for(let i=0;i<matrix.length;i++) {
        if(matrix[i][0] == 1) {
            arr[i][0] = 1;
        } else {
            arr[i][0] = 0;
        }
        result = Math.max(result,arr[i][0]);
    }
    for(let i=0;i<matrix[0].length;i++) {
        if(matrix[0][i] == 1) {
            arr[0][i] = 1;
        } else {
            arr[0][i] = 0;
        }
        result = Math.max(result,arr[0][i]);
    }
    for(let i=1;i<matrix.length;i++) {
        for(let j=1;j<matrix[0].length;j++) {
            if(matrix[i][j] == 0) {
                arr[i][j] = 0;
            } else {
                arr[i][j] = 1 + Math.min(arr[i-1][j],arr[i][j-1],arr[i-1][j-1]);
            }
            result = Math.max(result,arr[i][j]);
        }
    }
    return result*result;
};