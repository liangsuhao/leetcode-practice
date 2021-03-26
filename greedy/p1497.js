/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
 var canArrange = function(arr, k) {
  //按照对k的余数进行大小排序
  arr.sort(function(a,b){
      return (a%k)-(b%k);
  })
  //然后把0的先除去，并且看是不是偶数个
  var index = 0;
  for(let i=0;i<arr.length;i++){
      if((arr[i]%k) == 0){
          arr.splice(i,1);
          i--;
          index++;
      }
  }
  if(index%2 != 0){
      return false;
  }

  var i=0,j=arr.length-1;
  while(i < j){
      if(((arr[i]%k)+(arr[j]%k) == k) || ((arr[i]%k)+(arr[j]%k) == 0)){
          i++;
          j--;
      } else {
          return false;
      }
  }
  return true;
};
