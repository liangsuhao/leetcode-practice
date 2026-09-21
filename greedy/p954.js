/**
 * @param {number[]} arr
 * @return {boolean}
 * 给定一个长度为偶数的整数数组 arr，只有对 arr 进行重组后可以满足 “对于每个 0 <= i < len(arr) / 2，都有 arr[2 * i + 1] = 2 * arr[2 * i]” 时，返回 true；否则，返回 false。

 

示例 1：

输入：arr = [3,1,3,6]
输出：false
示例 2：

输入：arr = [2,1,2,6]
输出：false
示例 3：

输入：arr = [4,-2,2,-4]
输出：true
解释：可以用 [-2,-4] 和 [2,4] 这两组组成 [-2,-4,2,4] 或是 [2,4,-2,-4]
 

提示：

0 <= arr.length <= 3 * 104
arr.length 是偶数
-105 <= arr[i] <= 105
 */
var canReorderDoubled = function(arr) {
    const map = new Map();
    for(let x of arr) {
        map.set(x, (map.get(x) || 0) + 1);
    }
    if((map.get(0) || 0) % 2 !== 0) {
        return false;
    }

    const vals = [];
    for(let val of map.keys()) {
        vals.push(val);
    }
    vals.sort((a,b) => Math.abs(a) - Math.abs(b));
    for(let x of vals) {
        if(map.get(x) > (map.get(2*x) || 0)) {
            return false;
        }
        map.set(2*x, (map.get(2 * x) || 0) - map.get(x));
    }
    return true;
};