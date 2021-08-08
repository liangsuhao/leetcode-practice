/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 题目：
 *  给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：


输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
 */
 var spiralOrder = function(matrix) {
  let result = [];
  let tipArr = [];
  for(let i=0;i<matrix.length;i++){
      tipArr[i] = [];
      for(let j=0;j<matrix[0].length;j++){
          tipArr[i][j] = true;
      }
  }
  let poisition = 'right',row = 0,col = 0;
  while(true){
      if(poisition == 'left'){
          if(tipArr[row][col]){
              result.push(matrix[row][col]);
              tipArr[row][col] = false;
          }
          if(tipArr[row] && tipArr[row][col-1]){
              col--;
          } else if(tipArr[row] && tipArr[row-1][col]){
              poisition = 'up';
              row--;
          } else {
              return result;
          }
      } else if(poisition == 'right'){
          if(tipArr[row][col]){
              result.push(matrix[row][col]);
              tipArr[row][col] = false;
          }
          if(tipArr[row] && tipArr[row][col+1]){
              col++;
          } else if(tipArr[row+1] && tipArr[row+1][col]){
              row++;
              poisition = 'down';
          } else {
              return result;
          }
      } else if(poisition == 'up'){
          if(tipArr[row][col]){
              result.push(matrix[row][col]);
              tipArr[row][col] = false;
          }
          if(tipArr[row] && tipArr[row-1][col]){
              row--;
          } else if(tipArr[row] && tipArr[row][col+1]){
              col++;
              poisition = 'right';
          } else {
              return result;
          }
      } else if(poisition == 'down'){
          if(tipArr[row][col]){
              result.push(matrix[row][col]);
              tipArr[row][col] = false;
          }
          if(tipArr[row+1] && tipArr[row+1][col]){
              row++;
          } else if(tipArr[row] && tipArr[row][col-1]){
              col--;
              poisition = 'left';
          } else {
              return result;
          }
      }
  }
};