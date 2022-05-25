//高仿race
Promise.race = function(arr) {
  let length = arr.length;
  let result = [];

  return new Promise((resolve,reject)=> {
    for(let i=0;i<length;i++) {
      // arr[i].then(res=>resolve(res));
      Promise.resolve(arr[i]).then(res=>resolve(res))
    }
  })
}

//高仿 all
Promise.all = function(arr) {
  let length = arr.length;
  let result = [];
  let count = 0;

  return new Promise((resolve,reject)=> {
    for(let i=0;i<length;i++) {
      Promise.resolve(arr[i]).then((res)=>{
        result.push(res);
        count++;
      }).catch(e=>reject(e));
      if(result.length === length){
        resolve(result);
      }
    }
  })
}

//高仿 Promise
class myPromise() {
  
}