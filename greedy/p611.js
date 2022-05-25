/**
 * @param {number[]} nums
 * @return {number}
 * 题目：
 * 给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数。

 

示例 1:

输入: nums = [2,2,3,4]
输出: 3
解释:有效的组合是: 
2,3,4 (使用第一个 2)
2,3,4 (使用第二个 2)
2,2,3
示例 2:

输入: nums = [4,2,3,4]
输出: 4
 */
 var triangleNumber = function(nums) {
  let result = 0,n=nums.length;
  let judgy = function(a,b,c) {
      //任意两边之和大于第三边，任意两边之差小于第三边
      return (a+b>c)&&(a+c>b)&&(b+c>a)&&(Math.abs(a-b)<c)&&(Math.abs(a-c)<b)&&(Math.abs(b-c)<a);
  }
  for(let i=0;i<n-2;i++) {
      for(let j=i+1;j<n-1;j++) {
          for(let l=j+1;l<n;l++) {
            if(judgy(nums[i],nums[j],nums[l])) {
              result++;
            }
          }
      }
  }
  return result;
};