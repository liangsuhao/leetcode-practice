function debounce(func, wait) { //函数防抖
  let timmer = null;

  return function() {
    if(timmer) {
      clearTimeout(timmer);
    }
    timmer = setTimeout(()=>{
      func.apply(this,arguments);
      timmer = null;
    },wait)
  }
}

function throttle(func,wait) {   //函数节流
  let timmer = null;

  return function() {
    if(timmer) {
      return;
    }
    timmer = setTimeout(
      ()=>{
        func.apply(this,arguments);
        timmer = null;
      },wait
    )
  }
}

function fangdou(func,wait) {
  let timmer;

  return function() {
    if(timmer) {
      clearTimeout(timmer);
    }

    timmer = setTimeout(()=>{
      func.apply(this,arguments);
      timmer = null;
    },wait)
  }
}

function jieliu(func,wait) {
  let timmer;
  return function() {
    if(timmer) {
      return;
    }
    timmer = setTimeout(()=>{
      func.apply(this,wait);
      timmer = null;
    },wait)
  }
}