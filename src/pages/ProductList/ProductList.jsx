import { Card, Image, Table } from "antd";
import dayjs from "dayjs";
import { formatCurrency } from "../../utils/formatPrice";

const DATA = [
  {
    id: 1,
    name: "Product A",
    price: 200000,
    image: "https://picsum.photos/200/200",
    createdAt: dayjs().format("DD/MM/YYYY"),
  },
  {
    id: 2,
    name: "Product B",
    price: 200000,
    image: "https://picsum.photos/200/200",
    createdAt: dayjs().format("DD/MM/YYYY"),
  },
  {
    id: 3,
    name: "Product C",
    price: 200000,
    image: "https://picsum.photos/200/200",
    createdAt: dayjs().format("DD/MM/YYYY"),
  },
  {
    id: 4,
    name: "Product D",
    price: 200000,
    image: "https://picsum.photos/200/200",
    createdAt: dayjs().format("DD/MM/YYYY"),
  },
];

const ProductList = () => {
  const columns = [
    {
      title: "ID",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Image",
      key: "image",
      dataIndex: "image",
      render: (image) => <Image src={image} height={100} width={100} />,
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      render: (data) => formatCurrency(data),
    },
    {
      title: "Created At",
      key: "createdAt",
      render: () => dayjs().format("DD/MM/YYYY"),
    },
  ];

  return (
    <>
      <Card>
        <p className="font-bold text-2xl">Product</p>
      </Card>

      <Table columns={columns} dataSource={DATA} className="mt-3" />
    </>
  );
};

export default ProductList;
