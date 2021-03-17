/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
  var pre1 = new ListNode(),pre2 = new ListNode();
  var tmp1 = pre1,tmp2 = pre2;
  while(head){
      if(head.val < x ){
          tmp1.next = head;
          tmp1 = tmp1.next;
      } else {
          tmp2.next = head;
          tmp2 = tmp2.next;
      }
      head = head.next;
  }
  tmp2.next = null;
  tmp1.next = pre2.next;
  return pre1.next;
};