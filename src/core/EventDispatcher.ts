// https://github.com/mrdoob/three.js/blob/master/src/core/EventDispatcher.js

import { Event } from './Event';

type Handler = (...args: any[]) => void;

export class EventDispatcher<Type> {
  private readonly _listeners: Map<Type, Handler>;

  constructor() {
    this._listeners = new Map();
  }

  addEventListener(type: Type, listener: Handler) {
    this._listeners.set(type, listener);
  }

  hasEventListener(type: Type) {
    return this._listeners.has(type);
  }

  removeEventListener(type: Type) {
    this._listeners.delete(type);
  }

  dispatchEvent(event: Event<Type>) {
    const listener = this._listeners.get(event.type);

    if (!listener) return;

    event.target = this;

    listener.call(this, event);
  }
}
