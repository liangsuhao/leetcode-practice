/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

 

示例 1：


输入：root = [1,null,2,3]
输出：[1,3,2]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
 

提示：

树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100
 

进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    // 方法1：递归
    // function inorderFunc(node) {
    //     if(!node) {
    //         return null;
    //     }
    //     if(node.left) {
    //         inorderFunc(node.left);
    //     }
    //     if(Number.isFinite(node.val)) {
    //         result.push(node.val);
    //     }
    //     if(node.right) {
    //         inorderFunc(node.right);
    //     }
    // }
    // inorderFunc(root);
    // return result;

    // 方法2：迭代
    let tempNode = root;
    const stack = [root];
    while(stack && stack.length > 0 && stack[0]) {
        tempNode = stack[0];
        if(!tempNode.time || tempNode.time === 0) {
            // 说明要先向左遍历
            tempNode.time = 1;
            if(tempNode.left) {
                stack.unshift(tempNode.left);
            }
            continue;
        } else if(tempNode.time === 1) {
            // 说明左边遍历完了该遍历右边了
            if(Number.isFinite(tempNode.val)) {
                result.push(tempNode.val);
            }
            tempNode.time++;
            if(tempNode.time === 2) {
                stack.shift()
            }
            if(tempNode.right) {
                stack.unshift(tempNode.right);
            }
        }
    }
    return result;
};