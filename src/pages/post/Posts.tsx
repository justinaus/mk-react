import { Observer } from 'mobx-react';
import React, { useEffect } from 'react';
import BasicTable from '../../components/common/tables/BasicTable';
import Post from '../../interfaces/post.interface';
import ApiPath from '../../services/ApiPath';
import TableListStore from '../../stores/TableListStore';
import PostRow from '../../components/post/PostRow';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import PostFilter from '../../components/post/PostFilter';
import IPostFilter from '../../interfaces/postFilter.interface';

export default function Posts() {
  useEffect(() => {
    const path = `${ApiPath.posts}?_page=2&_limit=10`;

    TableListStore.getData(path);
  }, []);

  const Rows = ({ datas }: any) => {
    return (
      <>
        {datas.map((item: Post) => {
          return <PostRow model={item} key={item.id} />;
        })}
      </>
    );
  };

  const HeadRow = () => {
    return (
      <TableRow>
        <TableCell>userId</TableCell>
        <TableCell>id</TableCell>
        <TableCell>title</TableCell>
        <TableCell>body</TableCell>
      </TableRow>
    );
  };

  const onChangeFilter = (params: IPostFilter) => {
    TableListStore.getData(ApiPath.posts, params);
  };

  return (
    <div>
      <PostFilter onChange={onChangeFilter} />
      <Observer>
        {() => (
          <BasicTable
            rowDatas={TableListStore.list}
            headRow={<HeadRow />}
            rows={<Rows datas={TableListStore.list} />}
          />
        )}
      </Observer>
    </div>
  );
}
