/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  let nowNode = head;
  head = head.next;
  nowNode.next = null;
  while(head) {
      let nowNum = head.val;
      let tmpNode = nowNode;
      while(tmpNode) {
          if(nowNum < tmpNode.val) {
              let ttNode = head;
              head = head.next;
              ttNode.next = nowNode;
              nowNode = ttNode;
              break;
          } else if(!tmpNode.next) {
              tmpNode.next = head;
              head = head.next;
              tmpNode.next.next = null;
              break
          } else if(nowNum > tmpNode.val && nowNum <= tmpNode.next.val) {
              let ttnode = head;
              head = head.next;
              ttnode.next = tmpNode.next;
              tmpNode.next = ttnode;
              break;
          } else {
              tmpNode = tmpNode.next;
          }
      }
  }
  return nowNode;
};