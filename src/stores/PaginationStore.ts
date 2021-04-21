import { PageEvent, PageEventEnum } from '../events/PageEvent';
import { EventDispatcher } from '../core/EventDispatcher';

export class PaginationStore extends EventDispatcher<PageEventEnum> {
  private _page = 1;

  // TEST.
  private _total = 10;

  get page() {
    return this._page;
  }

  set page(value: number) {
    this._page = value;

    const event = new PageEvent(PageEventEnum.Change, this._page, this._total);
    this.dispatchEvent(event);
  }
}
