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
 * 题目:
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例 1：


输入：head = [1,2,3,4]
输出：[2,1,4,3]
示例 2：

输入：head = []
输出：[]
示例 3：

输入：head = [1]
输出：[1]
 */
var swapPairs = function(head) {
    var result = head;
    if(head == null){
        return result;
    }
    if(head.next == null){
        return result;
    }
    result = head.next;
    var tmpResult;
    while(true){
        if(head.next == result){
            tmp = head.next.next;
            head.next.next = head;
            head.next = tmp; 
            tmpResult = head;
        }else{
            tmp = head.next.next;
            tmpResult.next = head.next;
            head.next.next = head;
            head.next = tmp; 
            tmpResult = head;
        }
        
        if(head.next==null || head.next.next==null){
            return result;
        }
        head = head.next;
    }
    
};