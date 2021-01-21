import { Observer } from 'mobx-react';
import React, { useEffect } from 'react';
import BasicTable from '../../components/common/tables/BasicTable';
import ApiPath from '../../services/ApiPath';
import TableListStore from '../../stores/TableListStore';
import UserRow from '../../components/user/UserRow';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import User from '../../interfaces/user.interface';

export default function Users() {
  useEffect(() => {
    const path = `${ApiPath.users}?_page=1&_limit=5`;

    TableListStore.getData(path);
  }, []);

  const Rows = ({ datas }: any) => {
    return (
      <>
        {datas.map((item: User) => {
          return <UserRow model={item} key={item.id} />;
        })}
      </>
    );
  };

  const HeadRow = () => {
    return (
      <TableRow>
        <TableCell>name</TableCell>
        <TableCell>email</TableCell>
        <TableCell>address.city</TableCell>
      </TableRow>
    );
  };

  return (
    <div>
      List Page
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
