/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        var tmp = nums.indexOf(target-nums[i])
        if(tmp!=-1&&tmp!=i){
            return [i,tmp];
        }
    }
};