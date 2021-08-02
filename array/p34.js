/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 题目：
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
 */
 var searchRange = function(nums, target) {
  if(nums.length == 0){
      return [-1,-1];
  }
  let begin =0,end = nums.length-1;
  let mid = parseInt((begin+end)/2);
  while(nums[mid] != target){
      if(nums[mid] > target){
          end = mid-1;
          mid = parseInt((begin+end)/2);
      } else if(nums[mid] < target){
          begin = mid+1;
          mid = parseInt((begin+end)/2);
      }
      if(begin > end ){
          return [-1,-1];
      }
  }
  //找到了target，左右两边找最初和最末出现的额地方;
  let pre=mid,last=mid;
  while(nums[mid] == nums[last]){
      last++;
  }
  last--;
  while(nums[mid] == nums[pre]){
      pre--;
  }
  pre++;
  return [pre,last];

};