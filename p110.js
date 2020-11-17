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
 * @return {boolean}
 * 题目：
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：true
示例 2：


输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
示例 3：

输入：root = []
输出：true
 */
var isBalanced = function(root) {
    if(root==null){
        return true;
    }
    return height(root)>=0;
};

var height = function (root) {
    if(root==null){
        return 0;
    }
    var lheight = height(root.left);
    var rheight = height(root.right);
    if(lheight>=0 && rheight>=0 && Math.abs(lheight-rheight)<=1){
        return 1+Math.max(lheight,rheight);
    }else {
        return -1;
    }
}