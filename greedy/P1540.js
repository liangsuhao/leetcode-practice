/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
 var canConvertString = function(s, t, k) {
  if(s.length != t.length){
          return false;
      }
      var result = [],flag;
      for(let i=0;i<s.length;i++){
          flag = t[i].charCodeAt()-s[i].charCodeAt()<0 ? t[i].charCodeAt()-s[i].charCodeAt()+26 : t[i].charCodeAt()-s[i].charCodeAt();
          if(flag == 0)continue;
          result[flag] = (result[flag] || 0)+1;
          if((result[flag]-1)*26+flag <= k){
          } else {
              return false;
          }
      }
      return true;
};