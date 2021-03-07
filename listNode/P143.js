/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * 题目：
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例 1:

给定链表 1->2->3->4, 重新排列为 1->4->2->3.
示例 2:

给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
 */
 var reorderList = function(head) {
   var tmp = head, s=[];
   while(head){
    tmp = head.next, 
    head.next = null, 
    s.push(head), 
    head = tmp;
   }
   var i = -1, j = s.length
    while (++i < --j) 
        s[i].next = s[j], 
        j !== i + 1 && (s[j].next = s[i + 1])
    return s[0]
};