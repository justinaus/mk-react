import { Button } from '@material-ui/core';
import React, { useCallback } from 'react';
import ModalStore from '../stores/ModalStore';

function sampleModal() {
  const onClickTest = () => {
    ModalStore.list.push(<div>444</div>);
  };
  return (
    <div>
      <div>Hello!</div>
      <div onClick={onClickTest}>click</div>
    </div>
  );
}

export function ModalTest() {
  const handleClick = useCallback(() => ModalStore.change(sampleModal()), []);

  return (
    <>
      <Button onClick={handleClick}>click</Button>
    </>
  );
}
