import { makeAutoObservable } from 'mobx';
import Checkbox from '../components/common/checkboxes/checkbox.interface';

const checkboxDatas: Checkbox[] = [
  {
    label: 'Type1',
    name: 'type1',
    checked: true,
  },
  {
    label: 'Type2',
    name: 'type2',
    checked: false,
  },
  {
    label: 'Type3',
    name: 'type3',
    checked: true,
    disabled: true,
  },
];

const initialState = {
  checkboxDatas: checkboxDatas,
};

class PostFilterStore {
  state = initialState;

  constructor() {
    makeAutoObservable(this);
  }

  toggleCheckbox(checkboxData: Checkbox) {
    this.state.checkboxDatas = this.state.checkboxDatas.map((item) => {
      if (item.name !== checkboxData.name) return item;

      return { ...item, checked: !checkboxData.checked };
    });
  }
}

export default new PostFilterStore();
