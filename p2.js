/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 题目：
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */
var addTwoNumbers = function(l1, l2) {
    var scale=0;
    var result = new ListNode(0,null);
    var tmp = result;
    while((l1.val+l2.val+scale > 0) || l1.next || l2.next){
        if(l1.val+l2.val+scale>=10){
            tmp.val = (l1.val+l2.val+scale)%10;
            scale = 1;
        }else{
            tmp.val = l1.val+l2.val+scale;
            scale = 0;
        }
        l1 = l1.next ? l1.next : new ListNode(0,null);
        l2 = l2.next ? l2.next : new ListNode(0,null);
        if((l1.val+l2.val+scale > 0) || l1.next || l2.next){
            tmp.next = new ListNode(0,null);
            tmp = tmp.next;
        }
    }
    return result;
};