import {  Input, Space, Table } from "antd";
import { AudioOutlined } from '@ant-design/icons';
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

const data = [
  {
    key: "1",
    name: "Product 1",
    price: "$10.00",
    description: "This is product 1.",
  },
  {
    key: "2",
    name: "Product 2",
    price: "$20.00",
    description: "This is product 2.",
  },
  {
    key: "3",
    name: "Product 3",
    price: "$30.00",
    description: "This is product 3.",
  },
];    

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

export default function shop() {
  return (
    <div>
      <div className="text-2xl font-bold mb-4">
        <Space.Compact>
          <Space.Addon>Buscar: </Space.Addon>
          <Search placeholder="input search text" allowClear onSearch={onSearch} />
        </Space.Compact>


      </div>
      <div className="p-4 rounded-lg shadow-md">
        <Table
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>

  );
}  