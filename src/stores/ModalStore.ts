import React from 'react';
import { makeAutoObservable } from 'mobx';

class ModalStore {
  list: JSX.Element[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  pop(needAnimation = false) {
    if (this.list.length === 0) return;

    // animation.

    this.list.pop();
  }

  push(modal: JSX.Element, needAnimation = false) {
    // animation.

    this.list.push(modal);
  }

  change(newModal: JSX.Element) {
    this.pop(true);

    this.push(newModal, true);
  }
}

export default new ModalStore();
