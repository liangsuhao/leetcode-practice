/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 题目：
 * 给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
 */
var isSymmetric = function(root) {
    if(!root){
        return true;
    }
    return check(root.left,root.right);

};

var check = function(left , right){
    if(left==null && right==null){
        return true;
    }else if(left!=right && (left==null || right==null)){
        return false;
    }

    if(left.val === right.val){
        return check(left.right,right.left) && check(left.left,right.right);
    }else{
        return false;
    }
}