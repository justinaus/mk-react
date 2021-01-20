import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IPostModel from '../../models/IPostModel';

interface Props {
  model: IPostModel;
}

export default function PostRow({ model }: Props) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {model.userId}
      </TableCell>
      <TableCell align="right">{model.id}</TableCell>
      <TableCell>{model.title}</TableCell>
      <TableCell>{model.body}</TableCell>
    </TableRow>
  );
}
