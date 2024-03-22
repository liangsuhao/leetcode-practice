/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let i = 0,map = {};
  for(i=0;i<nums.length;i++) {
      if(map[nums[i]]) {
          return true;
      }
      map[nums[i]] = true;
  }
  return false;
};