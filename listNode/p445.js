/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 题目：
 * 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

 

进阶：

如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

 

示例：

输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 8 -> 0 -> 7
 */
var addTwoNumbers = function(l1, l2) {
    const stack1 = [];
  const stack2 = [];
  const stack = [];

  let cur1 = l1;
  let cur2 = l2;
  let curried = 0;

  while (cur1) {
    stack1.push(cur1.val);
    cur1 = cur1.next;
  }

  while (cur2) {
    stack2.push(cur2.val);
    cur2 = cur2.next;
  }

  let a = null;
  let b = null;

  while (stack1.length > 0 || stack2.length > 0) {
    a = Number(stack1.pop()) || 0;
    b = Number(stack2.pop()) || 0;

    stack.push((a + b + curried) % 10);

    curried = a + b + curried >= 10 ? 1 : 0;
  }

  if (curried === 1) {
    stack.push(1);
  }

  const dummy = new ListNode();

  let current = dummy;

  while (stack.length > 0) {
    current.next = new ListNode(stack.pop());
    current = current.next;
  }

  return dummy.next;
};