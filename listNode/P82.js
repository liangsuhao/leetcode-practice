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
 * 题目：
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

示例 1:

输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:

输入: 1->1->1->2->3
输出: 2->3ß

链表中如何删除当前节点
 */
 var deleteDuplicates = function(head) {
  var tmp = head,num;
    var result = prev = new ListNode();
    prev.next = head;
    while(tmp){
        if(tmp.next){
            if(tmp.val == tmp.next.val && num != tmp.val){
                num = tmp.val;
            }
            if(tmp.val == num){ //删除对应的节点
                var node = tmp.next;
                tmp.next = null;
                prev.next = node;
                tmp = node;
                continue;
            }
        }else{
            if(tmp.val == num){ //删除对应的节点
                var node = tmp.next;
                tmp.next = null;
                prev.next = node;
                tmp = node;
                continue;
            }
        }
        
        prev = prev.next;
        tmp = tmp.next;
    }
    return result.next;
};