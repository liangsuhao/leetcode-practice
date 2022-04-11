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
 */
var BSTIterator = function(root) {
    this.index = -1;
    this.arr = [];
    let bst = (node) => {
        if(!node){
            return;
        }
        this.arr.push(node.val);
        bst(node.left);
        bst(node.right);
    }
    bst(root);
    this.arr.sort((a,b)=>{
        return a-b;
    })
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.index++;
    return this.arr[this.index];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return (this.index+1>=0 && this.index+1<this.arr.length);
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */