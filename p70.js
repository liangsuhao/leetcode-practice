/**
 * @param {number} n
 * @return {number}
 * 题目：
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
 */
var climbStairs = function(n) {
    //直接递归会超时
    /*if(n===1||n===0||n===2||n===3){
        return n;
    }
    return climbStairs(n-2)+climbStairs(n-1);*/
    var a = [];
    a[0] = 0,a[1] = 1,a[2] = 2,a[3] = 3;
    for(var i=0;i<=n;i++){
        if(!a[i]){
            a[i] = a[i-1]+a[i-2];
        }
    }
    return a[n];
};