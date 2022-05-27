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
 */
 var countNodes = function(root) {
  let result = 0,arr = [];
  arr.push(root);
  while(arr.length > 0) {
      for(let i=0;i<arr.length;i++) {
          result++;
          if(arr[i].left) {
            arr.push(arr[i].left);
          }
          if(arr[i].right) {
            arr.push(arr[i].right);
          }
          arr.shift();
      }
  }
  return result;
}; 