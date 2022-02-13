/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * 题目：
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 

示例 1：


输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
示例 2：

输入：head = [5], left = 1, right = 1
输出：[5]
 */
 var reverseBetween = function(head, left, right) {
    let tmpNode = head,cur=0,prevNode,behindNode,firstNode,lastNode,tmpList;
    while(tmpNode) {
        cur++;
        let useNode = tmpNode;
        tmpNode = tmpNode.next;
        if(cur === left-1) {
            prevNode = useNode;
        }
        if(cur === right+1) {
            behindNode = useNode;
        }
        if(cur>=left && cur<=right) {
            // let theNode = new ListNode(tmpNode.val,null);
            if(!tmpList) {
                tmpList = useNode;
                lastNode = useNode;
                tmpList.next = null;
                if(cur === right) {
                    firstNode = useNode
                }
            } else {
                if(cur === right) {
                    firstNode = useNode
                }
                useNode.next = tmpList;
                tmpList = useNode;
            }
        }
    }
    if(prevNode) {
        prevNode.next = firstNode;
    } else {
        head = firstNode;
    }
    if(behindNode) {
        lastNode.next = behindNode;
    }
    return head;
};