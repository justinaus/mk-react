import { Observer } from 'mobx-react';
import React from 'react';
import PostFilterStore from '../../stores/PostFilterStore';
import Checkbox from '../common/checkboxes/checkbox.interface';
import CheckboxForm from '../common/checkboxes/CheckboxForm';

export default function PostFilter() {
  const onChangeCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: Checkbox,
  ) => {
    PostFilterStore.toggleCheckbox(data);
  };

  return (
    <Observer>
      {() => (
        <CheckboxForm
          datas={PostFilterStore.state.checkboxDatas}
          onChange={onChangeCheckbox}
        />
      )}
    </Observer>
  );
}
