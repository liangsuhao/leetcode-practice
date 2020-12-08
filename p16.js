/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 题目：
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

 

示例：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 */
var threeSumClosest = function(nums, target) {
    var length = nums.length;
    if(length < 3){
        return null;
    }
 
    nums.sort(function(a,b){return a-b;})

    var result = nums[0]+nums[1]+nums[2];
    var min = Math.abs(result-target);
    for(var i=0;i<length;i++){
        var l = i+1;r = length-1;
        while(l<r){
            if(Math.abs(nums[i]+nums[l]+nums[r]-target) <= min){
                min = Math.abs(nums[i]+nums[l]+nums[r]-target);
                result = nums[i]+nums[l]+nums[r];
            }
            
            if(nums[i]+nums[l]+nums[r] > target){
                r--;
            }else{
                l++;
            }
        }
    }
    return result;
};
