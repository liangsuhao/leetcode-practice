/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var minOperations = function(nums1, nums2) {
  var sum1 = 0,sum2 = 0;
  for(var i=0;i<nums1.length;i++){
      sum1 += nums1[i];
  }
  for(var i=0;i<nums2.length;i++){
      sum2 += nums2[i];
  }
  var diff;
  var result = 0;
  //比较两个数组和的大小
  if(sum1 > sum2){
      diff = sum1 - sum2;
      //nums1倒序排
      nums1.sort(function(a,b){
          return b-a;
      })
      nums2.sort(function(a,b){
          return a-b;
      })
      var pro1 = pro2 = 0;
      while(diff>0){
          if((nums1[pro1] && !nums2[pro2]) || ((nums1[pro1] - 1) > (6 - nums2[pro2]))){
              diff = diff - (nums1[pro1] - 1);
              pro1++;
          }else {
              diff = diff - (6 - nums2[pro2]);
              pro2++;
          }
          result++;
          if(pro1>=nums1.length && pro2>=nums2.length){
              break;
          }
      }
  }else if(sum2 > sum1){
      diff = sum2 - sum1;
      //nums2倒序排
      nums1.sort(function(a,b){
          return a-b;
      })
      nums2.sort(function(a,b){
          return b-a;
      })
      var pro1 = pro2 = 0;
      while(diff>0){
          if((nums1[pro1]&&!nums2[pro2]) || ((6 - nums1[pro1]) > (nums2[pro2] - 1))){
              diff = diff - (6 - nums1[pro1]);
              pro1++;
          }else {
              diff = diff - (nums2[pro2] - 1);
              pro2++;
          }
          result++;
          if(pro1>=nums1.length && pro2>=nums2.length){
              break;
          }
      }
  } else{
      return 0;
  }

  if(diff > 0){
      return -1;
  }else{
      return result;
  }
};