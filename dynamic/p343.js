/**
 * @param {number} n
 * @return {number}
 * 题目：
 * 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

返回 你可以获得的最大乘积 。

示例 1:

输入: n = 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。
示例 2:

输入: n = 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 */
 var integerBreak = function(n) {
  let arr = new Array(n+1).fill(0);
  arr[0] = 0,arr[1] = 0,arr[2] = 1;
  for(let i=3;i<=n;i++) {
      for(let j=2;j<=i-1;j++) {
          arr[i] = Math.max(arr[i],(i-j)*j,(i-j)*arr[j])
      }
  }
  return arr[n];
};