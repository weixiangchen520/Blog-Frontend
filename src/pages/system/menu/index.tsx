import { history } from 'umi';
import { Table, Button, Space } from 'antd';
import { useAntdTable } from 'ahooks';

interface Item {
  name: {
    last: string;
  };
  email: string;
  phone: string;
  gender: 'male' | 'female';
}

interface Result {
  total: number;
  list: Item[];
}

const getTableData = ({ current, pageSize }: IPaginationParams): Promise<Result> => {
  const query = `page=${current}&size=${pageSize}`;

  return fetch(`https://randomuser.me/api?results=55&${query}`)
    .then((res) => res.json())
    .then((res) => ({
      total: res.info.results,
      list: res.results,
    }));
};

export default () => {
  const { tableProps } = useAntdTable(getTableData);

  const columns = [
    {
      title: 'name',
      dataIndex: ['name', 'last'],
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    },
  ];

  return <>
    <Space style={{ marginBottom: 24 }}>
        <Button type="primary" onClick={() => history.push('/system/menu/add')}>新增菜单</Button>
    </Space>
    <Table columns={columns} rowKey="email" {...tableProps} />
  </>;
};