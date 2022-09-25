/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 * 题目：
 * 给定链表头结点 head，该链表上的每个结点都有一个 唯一的整型值 。同时给定列表 nums，该列表是上述链表中整型值的一个子集。

返回列表 nums 中组件的个数，这里对组件的定义为：链表中一段最长连续结点的值（该值必须在列表 nums 中）构成的集合。

示例 1：

输入: head = [0,1,2,3], nums = [0,1,3]
输出: 2
解释: 链表中,0 和 1 是相连接的，且 nums 中不包含 2，所以 [0, 1] 是 nums 的一个组件，同理 [3] 也是一个组件，故返回 2。
示例 2：

 

输入: head = [0,1,2,3,4], nums = [0,3,1,4]
输出: 2
解释: 链表中，0 和 1 是相连接的，3 和 4 是相连接的，所以 [0, 1] 和 [3, 4] 是两个组件，故返回 2。
 

提示：

链表中节点数为n
1 <= n <= 104
0 <= Node.val < n
Node.val 中所有值 不同
1 <= nums.length <= n
0 <= nums[i] < n
nums 中所有值 不同
 */
 var numComponents = function(head, nums) {
    let result = 0, cur = head, nextCur, curLen = false;
    while(cur) {
        nextCur = cur.next;
        if(nums.indexOf(cur.val) !== -1) {
            curLen = true;
        } else {
            if(curLen) {
                result++;
                curLen = false;
            }
        }
        if(curLen && nextCur) {
            if(nums.indexOf(nextCur.val)!==-1 && nums.indexOf(nextCur.val) !== -1) {
                
            } else {
                result++;
                curLen = false;
            }
        }
        cur = nextCur;
    }
    if(curLen) {
        result++;
    }
    return result;
};