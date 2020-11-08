/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 题目：
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 */
var maxSubArray = function(nums) {
    //从前往后。分治的思想：首先数组中只有一个数，再加一个数，最大子序列就是当前数组的最大子序列 与 当前的往后一直到新加入的
    //这两个子序列的和比大小，取最大的。然后一直往数组末尾加数字，一直比大小，这样循环完。

    var sum = nums[0], result=0;
    for(var i=nums.length-1;i>=0;i++){
        if(nums[i]>0){
            sum += nums[i];
        }else{
            sum = nums[i];
        }
        result = Math.max(result,sum);
    }
    return result;
};