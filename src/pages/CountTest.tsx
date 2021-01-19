import { Observer } from 'mobx-react';
import React from 'react';
import PopoverButton from '../components/common/buttons/PopoverButton';
import countStore from '../stores/CountStore';

export default function CountTest() {
  const onClickTest = () => {
    countStore.add();
  };

  return (
    <div>
      Count Test
      <Observer>{() => <div>{countStore.count}</div>}</Observer>
      <PopoverButton onClick={onClickTest} />
    </div>
  );
}
