/**
 * @param {number[]} height
 * @return {number}
 * 题目:
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
示例 2：

输入：height = [4,2,0,3,2,5]
输出：9
 */
 var trap = function(height) {
  var result = 0,max = 0, maxPos = 0;
  for(var i=0;i<height.length;i++){
      if(height[i]>max){
          max = height[i];
          maxPos = i;
      }
  }
  var begin = 0,tmp = 0;
  for(var i=0;i<=maxPos;i++){
      if(height[i] < begin){
          tmp += (begin-height[i]);
      } else{
          begin = height[i];
          result += tmp;
          tmp = 0;
      }
  }
  var end = 0,tmp = 0;
  for(var i=height.length-1;i>=maxPos;i--){
      if(height[i] < end){
          tmp += (end-height[i]);
      } else{
          end = height[i];
          result += tmp;
          tmp = 0;
      }
  }
  return result;
};