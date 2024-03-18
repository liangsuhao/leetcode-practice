/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
  let halfLen = palindrome.substring(0, Math.floor(palindrome.length / 2));
  if (halfLen) {
      let i = 0;
      for (i = 0; i < halfLen.length; i++) {
          if (halfLen[i] !== 'a') {
              palindrome = palindrome.substring(0,i) + 'a' + palindrome.substring(i+1);
              break;
          }
      }
      if (i === halfLen.length) {
          let tmpCode = palindrome[palindrome.length - 1];
          tmpCode = String.fromCharCode(tmpCode.charCodeAt(0) + 1);
          palindrome = palindrome.substring(0,palindrome.length-1) + tmpCode;
      }
      return palindrome;
  } else {
      return '';
  }
};