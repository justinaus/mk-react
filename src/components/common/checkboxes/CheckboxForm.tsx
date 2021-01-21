import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import ICheckbox from './checkbox.interface';

interface Props {
  datas: ICheckbox[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, data: ICheckbox) => void;
}

export default function CheckboxForm({ datas, onChange }: Props) {
  return (
    <FormGroup row>
      {datas.map((item) => {
        return (
          <FormControlLabel
            key={item.name}
            control={
              <Checkbox
                name={item.name}
                checked={item.checked}
                disabled={item.disabled}
                onChange={(e) => onChange(e, item)}
              />
            }
            label={item.label}
          />
        );
      })}
    </FormGroup>
  );
}
