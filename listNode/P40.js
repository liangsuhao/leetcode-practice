/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 题目：
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

注意：解集不能包含重复的组合。 

 

示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
[1,2,2],
[5]
]
 

提示:

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30
 */
 var combinationSum2 = function(candidates, target) {
  let result = [];
  candidates.sort(function(a,b){return a-b})
  let dfs = (target,item,index) => {
      if(target == 0){
          result.push(item);
          return;
      }
      if(index >= candidates.length){
          return;
      }
      //当不加进去的话，判断后面的数是否相等
      let tmp = index;
      while(candidates[tmp] == candidates[tmp+1]){
          tmp++;
      }
      dfs(target,item,tmp+1);
      if(candidates[index] <= target){
          dfs(target-candidates[index],[...item,candidates[index]],index+1);
      }
  }
  dfs(target,[],0);
  return result;
};