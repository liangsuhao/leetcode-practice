## 主线程和异步线程

### 宏任务与微任务
+ 一个Event Loop可以有多个事件队列，但是只有一个微任务队列
+ 微任务队列全部执行完之后才会重新渲染一次
+ 每个宏任务执行完之后都会重新渲染一次
+ requestAnimationFrame处于渲染阶段，不在微任务队列，也不在宏任务队列(比较特殊)

## 常见的微任务
+ promise
+ process.nextTick(Node.js)
+ Object.observe
+ MutaionObserver

## 常见的宏任务
+ script (可以理解为外层同步代码)
+ setTimeout/setInterval
+ setImmediate(Node.js)
+ I/O
+ UI事件
+ postMessage