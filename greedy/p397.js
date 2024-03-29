/**
 * @param {number} n
 * @return {number}
 * 题目：
 * 给定一个正整数 n ，你可以做如下操作：

如果 n 是偶数，则用 n / 2替换 n 。
如果 n 是奇数，则可以用 n + 1或n - 1替换 n 。
返回 n 变为 1 所需的 最小替换次数 。

示例 1：

输入：n = 8
输出：3
解释：8 -> 4 -> 2 -> 1
示例 2：

输入：n = 7
输出：4
解释：7 -> 8 -> 4 -> 2 -> 1
或 7 -> 6 -> 3 -> 2 -> 1
 */
 var integerReplacement = function(n) {

    let getNums = function(num) {
        if(num == 2) {
            return 1;
        } else if(num == 1) {
            return 0;
        } else if(num%2 == 0) {
            return 1+getNums(num/2);
        } else if(num%2 != 0) {
            return 1+Math.min(getNums(num+1),getNums(num-1));
        }
    }

    let result = getNums(n);
    return result;
};