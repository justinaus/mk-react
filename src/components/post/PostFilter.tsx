import { Observer } from 'mobx-react';
import React from 'react';
import IPostFilter from '../../interfaces/postFilter.interface';
import PostFilterStore from '../../stores/post/PostFilterStore';
import Checkbox from '../common/checkboxes/checkbox.interface';
import CheckboxForm from '../common/checkboxes/CheckboxForm';
import RadioForm from '../common/radios/RadioForm';

interface Props {
  onChange: (params: IPostFilter) => void;
}

export default function PostFilter({ onChange }: Props) {
  const onChangeFilter = () => {
    onChange(PostFilterStore.getParams());
  };

  const onChangeCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: Checkbox,
  ) => {
    PostFilterStore.toggleCheckbox(data);
  };

  const onChangeRaio = (newValue: string) => {
    PostFilterStore.changeRadio(newValue);

    onChangeFilter();
  };

  return (
    <Observer>
      {() => (
        <>
          <RadioForm
            legend="UserId"
            value={PostFilterStore.state.userId}
            datas={PostFilterStore.state.radioUserIdDatas}
            onChange={onChangeRaio}
          />
          <CheckboxForm
            datas={PostFilterStore.state.checkboxTestDatas}
            onChange={onChangeCheckbox}
          />
        </>
      )}
    </Observer>
  );
}
