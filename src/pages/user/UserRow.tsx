import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IUserModel from '../../models/IUserModel';

interface Props {
  model: IUserModel;
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
