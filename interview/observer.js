let observer_ids = 0;
let observed_ids = 0;

class Observer {
  constructor() {
    this.id = observer_ids++;
  }
  //观测到变化后的处理
  update(ob) {
    console.log("观察者" + this.id + `-检测到被观察者${ob.id}变化`);
  }
}


class Observed {
  constructor() {
    this.id = observed_ids++;
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  deletObserver(observer) {
    this.observers = this.observers.filter(e=>{
      return e.id!=observer.id;
    })
  }
  
  notify() {
    this.observers.forEach((item)=>{
      item.update(this);
    })
  }
}