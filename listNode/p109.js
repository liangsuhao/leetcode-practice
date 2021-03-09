/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 var sortedListToBST = function(head) {
    
  return makeTree(head,null);
};
var makeTree = function(head, tail) {
  if (head === tail) return null
  var p1 = head, p2 = head;
  // 快慢指针
  while(p2 !== tail) {
      p2 = p2.next;
      if (p2 !== tail) {
          p1 = p1.next;
          p2 = p2.next
      }
  }
  var treeNode = new TreeNode(p1.val);
  treeNode.left = makeTree(head, p1);
  treeNode.right = makeTree(p1.next, tail);
  return treeNode
}