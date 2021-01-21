import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Post from '../../interfaces/post.interface';

interface Props {
  model: Post;
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
