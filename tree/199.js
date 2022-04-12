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
 * @return {number[]}
 题目：
 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

 

示例 1:



输入: [1,2,3,null,5,null,4]
输出: [1,3,4]
示例 2:

输入: [1,null,3]
输出: [1,3]
示例 3:

输入: []
输出: []
 */
var rightSideView = function(root) {
    let result = [],tmp = [];
    if(root) {
        tmp.push(root);
    }  
    while(tmp.length > 0) {
        let tmpArr = [];
        result.push(tmp[tmp.length-1].val);
        for(let i=0;i<tmp.length;i++) {
            if(tmp[i].left) {
                tmpArr.push(tmp[i].left);
            }
            if(tmp[i].right) {
                tmpArr.push(tmp[i].right);
            }
        }
        tmp = tmpArr;
    }
    return result;
};