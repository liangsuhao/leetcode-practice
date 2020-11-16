/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 题目：
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]

 */
var levelOrderBottom = function(root) {
    if(root==null){
        return [];
    }
    var queue = [];
    queue.push(root);
    var result = [];
    while(queue.length>0){
        var tmpArr = [];
        var nowLength = queue.length;
        for(var i=0;i<nowLength;i++){
            var tmp = queue.shift();
            tmpArr.push(tmp.val);
            if(tmp.left){
               queue.push(tmp.left); 
            }
            if(tmp.right){
               queue.push(tmp.right); 
            }
        }
        result.unshift(tmpArr);
    }
    return result;
};