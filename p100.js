/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 题目：
 * 给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:

输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
示例 2:

输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
示例 3:

输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false
 */
var isSameTree = function(p, q) {
    //直接进行遍历来判断的话，复杂度为m*n，要很久
    if(!p && !q){
      return true;
    }
    if((!p && q) || (p && !q)){
      return false;
    }
    if(!p.left && !p.right && !q.left && !q.right){
      return (p.val === q.val);
    }
    if(p.val === q.val){
      return (isSameTree(p.left,q.left) && isSameTree(p.right,q.right))
    }else {
      return false;
    }
    //
  };