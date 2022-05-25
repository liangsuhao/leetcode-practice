/**
 * @param {number[][]} pairs
 * @return {number}
 */
 var findLongestChain = function(pairs) {
  pairs.sort((a,b)=>{ //先按照第一个数字升序排列
    return a[0]-b[0];
  })
  let left=pairs[0][0],right=pairs[0][1],result = 1;
  for(let i=1;i<pairs.length;i++) {
    if(pairs[i][0] > right) {
      right = pairs[i][1];
      result++;
    } else {
      if(pairs[i][1] < right) {
        right = pairs[i][1];
      }
    }
  }
  return result;
};