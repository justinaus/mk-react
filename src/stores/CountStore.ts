import { makeAutoObservable } from 'mobx';

class CountStore {
  count = 2;

  constructor() {
    makeAutoObservable(this);
  }

  add() {
    ++this.count;
  }
}

export default new CountStore();
