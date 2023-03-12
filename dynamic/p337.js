/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 
 * 题目：
 * 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。

除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。

给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。

示例 1:

输入: root = [3,2,3,null,3,null,1]
输出: 7 
解释: 小偷一晚能够盗取的最高金额 3 + 3 + 1 = 7
示例 2:

输入: root = [3,4,5,1,3,null,1]
输出: 9
解释: 小偷一晚能够盗取的最高金额 4 + 5 = 9
 */
 var rob = function(root) {
  const totalArr = [[root]], valMap = new Map();
  while(totalArr[0].length > 0) {
      let newArr = [];
      for(let i=0;i<totalArr[0].length;i++) {
          if(totalArr[0][i] && totalArr[0][i].left) {
              newArr.push(totalArr[0][i].left)
          }
          if(totalArr[0][i] && totalArr[0][i].right) {
              newArr.push(totalArr[0][i].right)
          }
      }
      totalArr.unshift(newArr);
  }
  for(let i=0;i<totalArr.length;i++) {
      for(let j=0;j<totalArr[i].length;j++) {
          let leftChildVal = totalArr[i][j].left ? valMap.get(totalArr[i][j].left) : 0;
          let rightChildVal = totalArr[i][j].right ? valMap.get(totalArr[i][j].right) : 0;
          let leftleftChildVal = (totalArr[i][j].left && totalArr[i][j].left.left) ? valMap.get(totalArr[i][j].left.left) : 0;
          let leftrightChildVal = (totalArr[i][j].left && totalArr[i][j].left.right) ? valMap.get(totalArr[i][j].left.right) : 0;
          let rightleftChildVal = (totalArr[i][j].right && totalArr[i][j].right.left) ? valMap.get(totalArr[i][j].right.left) : 0;
          let rightrightChildVal = (totalArr[i][j].right && totalArr[i][j].right.right) ? valMap.get(totalArr[i][j].right.right) : 0;
          let value = Math.max(totalArr[i][j].val+leftleftChildVal+leftrightChildVal+rightleftChildVal+rightrightChildVal, leftChildVal+rightChildVal);
          valMap.set(totalArr[i][j], value);
      }
  }
  return valMap.get(root);
};