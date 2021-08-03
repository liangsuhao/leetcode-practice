/**
 * @param {number[]} nums
 * @return {number[][]}
 * 题目：
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

 

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */
 var permuteUnique = function(nums) {
  let result = [];
  let bfs = function(arr1,arr2){
      if(arr2.length == 0){
          result.push(arr1);
          return;
      }
      let tmp = [];
      for(let i=0;i<arr2.length;i++){
          if(tmp.indexOf(arr2[i]) == -1){
            let tmpArr1 = [...arr1];
            tmpArr1.push(arr2[i]);
            let tmpArr2 = [...arr2];
            tmpArr2.splice(i,1);
            bfs(tmpArr1,tmpArr2);
            tmp.push(arr2[i]);
          }
      }
  }
  bfs([],nums);
  return result;
};