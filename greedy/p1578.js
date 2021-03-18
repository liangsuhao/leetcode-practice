/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
 var minCost = function(s, cost) {
  var result = 0,max = 0,flag=false;
  for(var i=0;i<s.length;i++){
      if(s[i] === s[i+1]){
          flag = true;
          max = Math.max(cost[i],max);
          //删除相应的字符与数组值
          result += cost[i];
          // s = s.substring(0,tmpDex)+s.substring(tmpDex+1,s.length);
          // cost.splice(tmpDex,1);
          // i--;
      }else{
          if(flag){
              max = Math.max(max,cost[i]);
              flag = false;
              result += cost[i];
              result -= max;
              max = 0;
          }
      }
  }
  return result;
};