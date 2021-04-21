import { Event } from '../core/Event';

export enum PageEventEnum {
  Change,
}

export class PageEvent extends Event<PageEventEnum> {
  page: number;
  total: number;

  constructor(type: PageEventEnum, page: number, total: number) {
    super(type);

    this.page = page;
    this.total = total;
  }
}
