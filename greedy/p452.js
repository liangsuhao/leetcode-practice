/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
  if(points.length == 0){
      return 0;
  }
  //首先按照开始节点进行排序
  points.sort(function(a,b){
      return a[1]-b[1];
  })
  var pos = points[0][1],count = 1;
  for(var i=1;i<points.length;i++){
      if(points[i][0] > pos){
          count++;
          pos = points[i][1];
      }
  }

  return count;
};