/**
 * @param {number[]} nums
 * @return {string}
 * 题目：
 * 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

示例 1：

输入：nums = [10,2]
输出："210"
示例 2：

输入：nums = [3,30,34,5,9]
输出："9534330"
 */
 var largestNumber = function(nums) {
    nums.sort((a,b) => {
        a = a.toString();
        b = b.toString();
        let al = a+b,bl = b+a;
        for(let i=0;i<al.length;i++) {
            if(al > bl) {
                return -1;
            } else if (al < bl) {
                return 1;
            }
        }
        return -1;
    })
    let result = '';
    if(nums[0] == 0) {
        return '0';
    }
    nums.forEach((item) => {
        result += item.toString();
    })
    return result;
};