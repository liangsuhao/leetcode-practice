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
 var sortList = function(head) {
  quic_sort(head,null);
  return head;

  
};
var getMiddle = function(head,tail){
  var p = head;
  var q = head.next;
  while(q){
      if(q.val < p.val){
          p = p.next;
          var tmp = q.val;
          q.val = p.val;
          p.val = tmp;
      }
  }
  var tmp2 = head.val;
  head.val = p.val;
  p.val = tmp2;
}

var quic_sort = function(head,tail){
  if(head==tail || !head.next){
      return;
  }
  var middle = getMiddle(head,tail);
  quic_sort(head,middle);
  quic_sort(middle.next,tail);
}