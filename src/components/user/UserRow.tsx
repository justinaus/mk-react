import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import User from '../../interfaces/user.interface';

interface Props {
  model: User;
}

export default function UserRow({ model }: Props) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {model.name}
      </TableCell>
      <TableCell>{model.email}</TableCell>
      <TableCell>{model.address.city}</TableCell>
    </TableRow>
  );
}
