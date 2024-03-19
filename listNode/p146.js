/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.nodeMap = {};
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if(this.nodeMap[key]) {
      let nowIndex = this.nodeMap[key]['index'];
      for(let i in this.nodeMap) {
          if(this.nodeMap[i]['index'] < nowIndex) {
              this.nodeMap[i]['index']++
          }
      }
      this.nodeMap[key]['index'] = 0;
      return this.nodeMap[key]['value'];
  } else {
      return -1;
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if(this.nodeMap[key]) {
      this.nodeMap[key]['value'] = value;
      this.nodeMap[key]['index'] = 0;
      let nowIndex = this.nodeMap[key]['index'];
      for(let i in this.nodeMap) {
          if(this.nodeMap[i]['index'] < nowIndex) {
              this.nodeMap[i]['index']++
          }
      }
  } else {
      if(Object.keys(this.nodeMap).length >= this.capacity) {
          let maxkey=null,maxIndex=0;
          for(let i in this.nodeMap) {
              if(!maxkey) {
                  maxkey = i;
                  maxIndex = this.nodeMap[i]['index'];
              } else if(this.nodeMap[i]['index'] > maxIndex) {
                  maxkey = i;
                  maxIndex = this.nodeMap[i]['index'];
              }
          }
          delete this.nodeMap[maxkey];
          for(let i in this.nodeMap) {
              this.nodeMap[i]['index']++
          }
          this.nodeMap[key] = {index: 0, value: value};
      } else {
          for(let i in this.nodeMap) {
              this.nodeMap[i]['index']++
          }
          this.nodeMap[key] = {index: 0, value: value};
      }
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/



/**
 * 或者使用map，利用map有先后插入的顺序
 */
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
      const value = this.map.get(key)
      this.map.delete(key)
      this.map.set(key, value)
      return value
  } else return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {

  if (this.map.has(key)) {
      this.map.delete(key)
      this.map.set(key, value)
  } else {
      this.map.size === this.capacity
      ?
      this.map.delete(this.map.keys().next().value)
      :null
      this.map.set(key, value)
  }

};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/