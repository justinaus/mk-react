import { makeAutoObservable } from 'mobx';
import Checkbox from '../../components/common/checkboxes/checkbox.interface';
import Radio from '../../components/common/radios/radio.interface';
import PostFilter from '../../interfaces/postFilter.interface';

const radioUserIdDatas: Radio[] = [
  {
    label: 'User1',
    value: '1',
  },
  {
    label: 'User2',
    value: '2',
  },
  {
    label: 'User3',
    value: '3',
    disabled: true,
  },
];

const checkboxTestDatas: Checkbox[] = [
  {
    label: 'Test1',
    name: 'test1',
    checked: true,
  },
  {
    label: 'Test2',
    name: 'test2',
    checked: false,
  },
  {
    label: 'Test3',
    name: 'test3',
    checked: true,
    disabled: true,
  },
];

const initialState = {
  radioUserIdDatas: radioUserIdDatas,
  checkboxTestDatas: checkboxTestDatas,
  userId: '2',
};

class PostFilterStore {
  state = initialState;

  constructor() {
    makeAutoObservable(this);
  }

  toggleCheckbox(checkboxData: Checkbox) {
    this.state.checkboxTestDatas = this.state.checkboxTestDatas.map((item) => {
      if (item.name !== checkboxData.name) return item;

      return { ...item, checked: !checkboxData.checked };
    });
  }

  changeRadio(newValue: string) {
    this.state.userId = newValue;
  }

  getParams(): PostFilter {
    const ret: PostFilter = {};

    const { userId } = this.state;

    if (userId) {
      ret.userId = userId;
    }

    return ret;
  }
}

export default new PostFilterStore();
