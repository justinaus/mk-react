import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function PopoverButton({ onClick }: Props) {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={(e) => onClick(e)}>
        Hello World
      </Button>
    </div>
  );
}
