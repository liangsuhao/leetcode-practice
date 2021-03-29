var minSetSize = function(arr) {
  var map2num = {};
  for(let i=0;i<arr.length;i++){
      if(!map2num[arr[i]]){
          map2num[arr[i]] = 1;
      } else {
          map2num[arr[i]]++;
      }
  }
  var mid = Math.ceil(arr.length/2);
  var sortable = [];
  for (var item in map2num) {
      sortable.push( map2num[item]);
  }

  sortable.sort(function(a, b) {
      return b - a;
  });

  var result = 0,num = 0;
  while(num < mid){
      num += sortable[result];
      result++;
  }
  return result;
};