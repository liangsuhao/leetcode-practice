/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 * 题目：
 * Alice 手中有一把牌，她想要重新排列这些牌，分成若干组，使每一组的牌数都是 groupSize ，并且由 groupSize 张连续的牌组成。

给你一个整数数组 hand 其中 hand[i] 是写在第 i 张牌，和一个整数 groupSize 。如果她可能重新排列这些牌，返回 true ；否则，返回 false 。

 

示例 1：

输入：hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
输出：true
解释：Alice 手中的牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
示例 2：

输入：hand = [1,2,3,4,5], groupSize = 4
输出：false
解释：Alice 手中的牌无法被重新排列成几个大小为 4 的组。
 */
 var isNStraightHand = function(hand, groupSize) {
  let map = new Map(), len = hand.length, arr = [];
  if(len % groupSize !== 0) {
      return false;
  }
  for(let i=0;i<len;i++) {
      if(arr.indexOf(hand[i]) === -1) {
          arr.push(hand[i]);
      }
      if(!map.get(hand[i])) {
          map.set(hand[i],1);
      } else {
          map.set(hand[i], map.get(hand[i])+1);
      }
  }
  arr.sort((a,b)=>a-b);
  for(let i=0;i<arr.length;i++) {
      let num = map.get(arr[i]);
      if(num > 0) {
          map.set(arr[i],0);
          for(let j=1;j<groupSize;j++) {
              if(map.get(arr[i]+j)===undefined || map.get(arr[i]+j) < num) {
                  return false;
              } else {
                  map.set(arr[i]+j, map.get(arr[i]+j)-num);
              }
          }
      }
  }
  return true;
};