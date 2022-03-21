/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let maxArr = [nums[0]],minArr =[nums[0]];
    for(let i=1;i<nums.length;i++) {
        maxArr[i] = Math.max(maxArr[i-1]*nums[i],minArr[i-1]*nums[i],nums[i]);
        minArr[i] = Math.min(maxArr[i-1]*nums[i],minArr[i-1]*nums[i],nums[i]);
    }
    return Math.max(...maxArr);
};