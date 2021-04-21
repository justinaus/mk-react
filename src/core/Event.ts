export class Event<T> {
  type: T;

  target?: any;

  constructor(type: T) {
    this.type = type;
  }
}
