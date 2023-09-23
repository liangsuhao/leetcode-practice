/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    let map = {}, max = nums[0],min = nums[0], len = nums.length, result = 0;
    nums.forEach((item)=>{
        if(!map[item]) {
            map[item] = 1;
        } else {
            map[item]++;
        }
        max = Math.max(max, item);
        min = Math.min(min, item);
    })
    max = Math.max(max, min + len - 1);
    for(let i = min ; i <= max ; i++) {
        if(map[i] && map[i] > 1) {
            if(i===max) {
                max++;
            }
            result += map[i] -1;
            if(map[i+1]) {
                map[i+1] += map[i] - 1;
            } else {
                map[i+1] = map[i] - 1;
            }
            map[i] = 1;
        }
        console.log(map, result);
    }
    console.log(max)
    return result;
};

minIncrementForUnique([13,4,12,5,3,16,11,6,11,0,2,7,19,10,1,15,15,15,11,13]);