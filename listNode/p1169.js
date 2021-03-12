/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeInBetween = function(list1, a, b, list2) {
  var tmp1 = list1,tmp2 = list1;
  while(a>1){
      tmp1 = tmp1.next;
      a--;
  }
  while(b>0){
      tmp2 = tmp2.next;
      b--;
  }
  var result1 = tmp1,result2 = tmp2.next;
  tmp2.next = null
  result1.next = list2;
  while(list2.next){
      list2 = list2.next;
  }
  list2.next = result2;
  return list1;

};