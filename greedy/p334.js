/**
 * @param {number[]} nums
 * @return {boolean}
 * 题目：
 * 给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。

如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。

示例 1：

输入：nums = [1,2,3,4,5]
输出：true
解释：任何 i < j < k 的三元组都满足题意
示例 2：

输入：nums = [5,4,3,2,1]
输出：false
解释：不存在满足题意的三元
 */
 var increasingTriplet = function(nums) {
    if(nums.length < 3) {
        return false;
    }
    let first = nums[0],second = Number.MAX_VALUE;
    for(let i=1;i<nums.length;i++) {
        if(nums[i] > second) {
            return true;
        } else if(nums[i] > first) {
            second = nums[i];
        } else {
            first = nums[i]
        }
    }
    return false;
};