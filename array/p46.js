/**
 * @param {number[]} nums
 * @return {number[][]}
 * 题目：
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 */
 var permute = function(nums) {

  let result = [];
  let bfs = function(arr1,arr2){
      if(arr2.length == 0){
          result.push(arr1);
          return;
      }
      for(let i=0;i<arr2.length;i++){
          let tmpArr1 = [...arr1];
          tmpArr1.push(arr2[i]);
          let tmpArr2 = [...arr2];
          tmpArr2.splice(i,1);
          bfs(tmpArr1,tmpArr2);
      }
  }
  bfs([],nums);
  return result;
};