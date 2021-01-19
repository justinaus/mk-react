import { Observer } from 'mobx-react';
import React, { useEffect } from 'react';
import BasicTable from '../components/common/tables/BasicTable';
import ApiPath from '../services/ApiPath';
import TableListStore from '../stores/TableListStore';

export default function Posts() {
  useEffect(() => {
    const path = `${ApiPath.posts}?_page=2&_limit=10`;

    TableListStore.getData(path);
  }, []);
  return (
    <div>
      List Page
      <Observer>{() => <BasicTable rows={TableListStore.list} />}</Observer>
    </div>
  );
}
