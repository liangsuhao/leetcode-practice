/**
 * @param {number} n
 * @return {string[][]}
 * 题目：
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。
示例 2：

输入：n = 1
输出：[["Q"]]
 

提示：

1 <= n <= 9
皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。

 */
 var solveNQueens = function(n) {
  let result = [];
  let dfs = function(arr,num,index){
      if( num == 0){
          result.push(arr);
      }
      if(index>=n){
          return;
      }
      let flag = false;
      for(let i=0;i<n;i++){  
          let tmpArr = [];
          for(let j=0;j<n;j++){ //复制数组
              tmpArr[j] = [];
              for(let k=0;k<n;k++){
                  tmpArr[j][k] = arr[j][k];
              }
          }
          let row,col;
          if(!arr[index][i]){
              flag = true;
              tmpArr[index][i] = 'Q';
              //放一个皇后之后八个方向全变'.'
              row = index-1;//上
              while(row>=0){
                  if(!tmpArr[row][i]){
                      tmpArr[row][i] = '.';
                  }
                  row--;
              }
              //放一个皇后之后八个方向全变'.'
              row = index+1;//下
              while(row<n){
                  if(!tmpArr[row][i]){
                      tmpArr[row][i] = '.';
                  }
                  row++;
              }
              //放一个皇后之后八个方向全变'.'
              col = i-1;//左
              while(col>=0){
                  if(!tmpArr[index][col]){
                      tmpArr[index][col] = '.';
                  }
                  col--;
              }
              //放一个皇后之后八个方向全变'.'
              col = i+1;//右
              while(col<n){
                  if(!tmpArr[index][col]){
                      tmpArr[index][col] = '.';
                  }
                  col++;
              }
              //放一个皇后之后八个方向全变'.'
              row = index-1;//左上
              col = i-1;
              while(row>=0 && col>=0){
                  if(!tmpArr[row][col]){
                      tmpArr[row][col] = '.';
                  }
                  row--;
                  col--;
              }
              //放一个皇后之后八个方向全变'.'
              row = index+1;//左下
              col = i-1;
              while(row<n && col>=0){
                  if(!tmpArr[row][col]){
                      tmpArr[row][col] = '.';
                  }
                  row++;
                  col--;
              }
              //放一个皇后之后八个方向全变'.'
              row = index-1;//右上
              col = i+1;
              while(row>=0 && col<n){
                  if(!tmpArr[row][col]){
                      tmpArr[row][col] = '.';
                  }
                  row--;
                  col++;
              }
              //放一个皇后之后八个方向全变'.'
              row = index+1;//右上
              col = i+1;
              while(row<n && col<n){
                  if(!tmpArr[row][col]){
                      tmpArr[row][col] = '.';
                  }
                  row++;
                  col++;
              }
              dfs(tmpArr,num-1,index+1);    
          }
      }
      if(!flag){
          return;
      }
  }
  let realRrr = [];
  for(let i=0;i<n;i++){
      realRrr[i] = [];
  }
  dfs(realRrr,n,0);
  let realResult = [];
  for(let i=0;i<result.length;i++){
      let tmp = [];
      for(let j=0;j<n;j++){
          tmp.push(result[i][j].join(''));
      }
      realResult.push(tmp);
  }
  return realResult;
};