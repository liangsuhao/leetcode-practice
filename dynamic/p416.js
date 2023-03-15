/**
 * @param {number[]} nums
 * @return {boolean}
 * 题目：
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
示例 1：

输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
示例 2：

输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
 */
 var canPartition = function(nums) {
  let sum = _.sum(nums),len = nums.length;
  if(sum%2!==0) {
      return false;
  }
  let half = parseInt(sum/2);
  let arr = new Array(len);
  for(let i=0;i<len;i++) {
      arr[i] = new Array(half+1);
      arr[i][0] = true;
  }
  for(let i=1;i<=half;i++) {
      arr[0][i] = (nums[0]===i);
  }
  for(let i=1;i<len;i++) {
      for(j=1;j<=half;j++) {
          arr[i][j] = j-nums[i]>0 ? (arr[i-1][j] || arr[i-1][j-nums[i]]) : arr[i-1][j]; 
      }
  }
  return arr[len-1][half];
};