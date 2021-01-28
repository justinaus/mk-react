import { makeAutoObservable, runInAction } from 'mobx';
import http from '../services/http';

class TableListStore {
  list = [];

  constructor() {
    makeAutoObservable(this);
  }

  getData(path: string, params?: any) {
    http
      .get(path, {
        params: params,
      })
      .then((response) => {
        const { data } = response;

        runInAction(() => {
          this.list = data;
        });
      })
      .catch((error) => {
        // error.
      });
  }
}

export default new TableListStore();
