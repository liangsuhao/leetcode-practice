/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function(people) {
  //先按照身高进行排序
  people.sort(function(a,b){
      return a[0]===b[0] ? a[1]-b[1] : b[0]-a[0];
  })

  var result = [];
  for (let i = 0; i < people.length; i++) {
      result.splice(people[i][1],0,people[i])
  }
  return result;
};