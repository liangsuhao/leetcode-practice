function jsonP(url,func) { //由于jsonp只能支持GET请求
  var funcName = "func" + Math.random().toString().replace('.','');
  var realUrl = url + "&jsoncallback=" + funcName;
  var scriptEle = document.createElement('script');
  scriptEle.src = realUrl;
  window[funcName] = function(data) {
    func(data);
    document.removeChild(scriptEle);
  }
  document.body.appendChild(scriptEle);
  window.jsonP = jsonP;
}

// function jsonP(url,func) {
//   var funcName = "func" + Math.random().toString().replace('.','');
//   var realUrl = url + "&jsoncallback=" + funcName;
//   var scriptEle = document.createElement('script');
//   scriptEle.src = realUrl;

//   window[funcName] = function(data) {
//     func(data);
//     document.removeChild(scriptEle);
//   }
//   document.body.appendChild(scriptEle);
// }