/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 题目:
 * 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

题目数据保证答案符合 32 位整数范围。

示例 1：

输入：nums = [1,2,3], target = 4
输出：7
解释：
所有可能的组合为：
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
请注意，顺序不同的序列被视作不同的组合。
示例 2：

输入：nums = [9], target = 3
输出：0
 */
 var combinationSum4 = function(nums, target) {
  let arr = new Array(target+1);
  arr[0] = 1;
  for(let i=1;i<=target;i++) {
      let total = 0;
      for(let j=0;j<nums.length;j++) {
          if(i-nums[j]>=0) {
              total += (arr[i-nums[j]] ? arr[i-nums[j]] : 0);
          }
      }
      arr[i] = total;
  }
  return arr[target];
};