import { observable, action } from 'mobx';
class Counter {
  @observable
  public count = 0;

  @action
  public increment() {
    this.count++;
  }
}

// create instance that can be shared across components
export const storeCounter = new Counter();
