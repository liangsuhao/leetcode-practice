/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 
 * 题目：
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
示例 2：

输入：coins = [2], amount = 3
输出：-1
示例 3：

输入：coins = [1], amount = 0
输出：0
 */
// var coinChange = function(coins, amount) {
//     coins.sort((a,b)=>b-a);
//     const arr = new Array();
//     for(let i=0;i<coins.length;i++) {
//         arr.push(new Array(amount+1));
//     }
//     for(let i=0;i<coins.length;i++) {
//         arr[i][0] = 0;
//     }
//     for(let i=0;i<=amount;i++) {
//         arr[0][i] = (i%coins[0] === 0) ? (i/coins[0]) : -1;
//     }
//     for(let i=1;i<coins.length;i++) {
//         for(let j=1;j<=amount;j++) {
//             let tmpNum = j, nowNum = 0,minNum = Number.MAX_VALUE;
//             minNum = (arr[i-1][j-(coins[i]*nowNum)] && arr[i-1][j-(coins[i]*nowNum)]!==-1) ? nowNum + arr[i-1][j-(coins[i]*nowNum)] : minNum;
//             while(tmpNum > 0) {
//                 tmpNum -= coins[i];
//                 nowNum++;
//                 minNum = (arr[i-1][j-(coins[i]*nowNum)] && arr[i-1][j-(coins[i]*nowNum)]!==-1) ? (Math.min(nowNum + arr[i-1][j-(coins[i]*nowNum)],minNum)) : minNum;
//             }
//             if(tmpNum === 0) {
//                 minNum = Math.min(nowNum,minNum);
//             }
//             if(minNum == Number.MAX_VALUE) {
//                 minNum = -1;
//             }
//             arr[i][j] = minNum;
//         }
//     }
//     console.log(arr)
//     return arr[coins.length-1][amount];
// };

var coinChange = function(coins, amount) {
  const dp = new Array(amount+1).fill(Infinity);
  dp[0] = 0;
  for(let i=0;i<=amount;i++) {
      for(let j=0;j<coins.length;j++) {
          if(i >= coins[j] ) {
              dp[i] = Math.min(dp[i], dp[i-coins[j]]+1);
          }
      }
  }

  return dp[amount]===Infinity ? -1 : dp[amount];

}
