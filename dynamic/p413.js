/**
 * @param {number[]} nums
 * @return {number}
 * 题目:
 * 如果一个数列 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该数列为等差数列。

例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。
给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。

子数组 是数组中的一个连续序列。

示例 1：

输入：nums = [1,2,3,4]
输出：3
解释：nums 中有三个子等差数组：[1, 2, 3]、[2, 3, 4] 和 [1,2,3,4] 自身。
示例 2：

输入：nums = [1]
输出：0
 */
 var numberOfArithmeticSlices = function(nums) {
  let len = nums.length;
  if(len < 3) { //等差数列必须大于3
      return 0;
  }
  let result = 0,sub = nums[1]-nums[0],newSub = null,nowlen = 1;
  for(let i=1;i<len;i++) {
      newSub = nums[i]-nums[i-1];
      if(sub === newSub) {
          nowlen++;
      } else {
          if(nowlen >= 3) {
              result = result + ((1+nowlen-2)*(nowlen-2)/2)
          }
          nowlen = 2;
          sub = nums[i]-nums[i-1];
          newSub = nums[i]-nums[i-1];
      }
  }
  if(nowlen >= 3) {
      result = result + ((1+nowlen-2)*(nowlen-2)/2)
  }
  return result;
};