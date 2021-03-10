/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  if(!head || !head.next){
      return null;
  }
  //首先判断有没有环，快慢指针法
  var fast = head,slow= head;
  var node;
  while(fast && fast.next){
      slow = slow.next;
      fast = fast.next;
      if(fast){
          fast = fast.next;
      }
      if(fast == slow){
          node = fast;
          break;
      }
  }
  if(!fast || !fast.next){ //没有环
      return null;
  }
  //然后找环的长度
  var tmp = node.next,count=1;
  while(tmp!=node){
      count++;
      tmp = tmp.next;
  }

  //让前面的节点先走count步
  var prev = head,behind = head;
  for(var i=0;i<count;i++){
      prev = prev.next;
  }
  var result = 0;
  while(prev != behind){
      prev = prev.next;
      behind = behind.next;
      result++;
  }
  return prev;
};