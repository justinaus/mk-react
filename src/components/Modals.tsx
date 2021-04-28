import React from 'react';

import { Dialog } from '@material-ui/core';
import { useCallback } from 'react';
import ModalStore from '../stores/ModalStore';
import { Observer } from 'mobx-react-lite';

export function Modals() {
  const handleCloseModal = useCallback(() => ModalStore.pop(), []);

  return (
    <Observer>
      {() => (
        <>
          {ModalStore.list.map((item, index) => (
            <Dialog key={index} open onClose={handleCloseModal}>
              <div>{item}</div>
            </Dialog>
          ))}
          {/* dim은 한개만 깔게 할 수도. */}
        </>
      )}
    </Observer>
  );
}
