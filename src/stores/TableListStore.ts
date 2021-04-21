import { makeAutoObservable, runInAction } from 'mobx';
import { PageEvent, PageEventEnum } from '../events/PageEvent';
import http from '../services/http';
import { PaginationStore } from './PaginationStore';

class TableListStore {
  list = [];

  paginationStore = new PaginationStore();

  constructor() {
    makeAutoObservable(this);

    this.paginationStore.addEventListener(
      PageEventEnum.Change,
      (event: PageEvent) => {
        console.log('page changed!', event.page, event.total, event.target);
      },
    );
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

          // TEST.
          this.paginationStore.page = 3;
        });
      })
      .catch((error) => {
        // error.
      });
  }
}

export default new TableListStore();
