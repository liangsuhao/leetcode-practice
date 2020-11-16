/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 题目：
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
 */
var sortedArrayToBST = function(nums) {
    if(nums.length==0){
        return null;
    }
    if(nums.length==1){
        var tmp = new TreeNode(nums[0]);
        return tmp;
    }

    var nodeLength = nums.length;
    var mid = parseInt(nodeLength/2);
    var tmpNode = new TreeNode(nums[mid]);
    tmpNode.left = sortedArrayToBST(nums.slice(0,mid));
    tmpNode.right = sortedArrayToBST(nums.slice(mid+1,nodeLength));
    return tmpNode;
};