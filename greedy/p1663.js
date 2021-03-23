/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 var getSmallestString = function(n, k) {
  var str2num = {
      '1' : 'a',
      '2' : 'b',
      '3' : 'c',
      '4' : 'd',
      '5' : 'e',
      '6' : 'f',
      '7' : 'g',
      '8' : 'h',
      '9' : 'i',
      '10' : 'j',
      '11' : 'k',
      '12' : 'l',
      '13' : 'm',
      '14' : 'n',
      '15' : 'o',
      '16' : 'p',
      '17' : 'q',
      '18' : 'r',
      '19' : 's',
      '20' : 't',
      '21' : 'u',
      '22' : 'v',
      '23' : 'w',
      '24' : 'x',
      '25' : 'y',
      '26' : 'z',
  };
  var str = [],pos = n-1;
  for(var i=0;i<n;i++){ //先初始化
      str[i] = 1;
  }
  k = k-n;
  while(k>=25){
      str[pos] += 25;
      pos--;
      k = k-25;
  }
  str[pos] += k;
  var result = "";
  for(var i=0;i<str.length;i++){
      result += str2num[str[i]];
  }
  return result;
};