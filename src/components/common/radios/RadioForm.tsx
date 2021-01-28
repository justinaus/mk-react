import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import IRadio from './radio.interface';

interface Props {
  legend?: string;
  ariaLabel?: string;
  name?: string;
  value: string;
  datas: IRadio[];
  onChange: (newValue: string) => void;
}

export default function RadioForm({
  legend,
  ariaLabel,
  name,
  value,
  datas,
  onChange,
}: Props) {
  const onChangeRaio = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <FormControl component="fieldset">
      {legend && <FormLabel component="legend">{legend}</FormLabel>}
      <RadioGroup
        aria-label={ariaLabel}
        name={name || 'radio'}
        value={value}
        onChange={onChangeRaio}
      >
        {datas.map((item) => {
          return (
            <FormControlLabel
              key={item.value}
              value={item.value}
              control={<Radio />}
              disabled={item.disabled}
              label={item.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
