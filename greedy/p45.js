/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  var result = 0,num = 0,begin=0,end=0,max=0;
  while( max < nums.length-1){
      begin = end;
      end = max;
      for(var i=begin;i<=end;i++){
          if((i+nums[i]) > max){
              max = i+nums[i];
          }
      }
      result++;
  }
  return result;
};