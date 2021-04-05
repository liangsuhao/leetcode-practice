/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
 var restoreMatrix = function(rowSum, colSum) {
  var result = new Array();
  for(let i=0;i<rowSum.length;i++){
      result[i] = new Array();
      for(let j=0;j<colSum.length;j++){
          result[i][j] = Math.min(rowSum[i],colSum[j]);
          rowSum[i] -= result[i][j];
          colSum[j] -= result[i][j];
      }
  }
  return result;
};