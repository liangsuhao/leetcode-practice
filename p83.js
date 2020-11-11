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
 * 题目：
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2
示例 2:

输入: 1->1->2->3->3
输出: 1->2->3

 */
var deleteDuplicates = function(head) {
    if(!head)return head;
    var node = head;
    while(node.next!=null){
        if(node.next.val === node.val){//将后一个元素删掉
            var tmp = node.next.next;
            node.next.next = null;
            node.next = tmp;
        }else{
            node = node.next;
        }
    }
    return head;
};