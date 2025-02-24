import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Header, Content, Sider } = Layout;
const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const items = [
  {
    key: "1",
    icon: <i className="fa-solid fa-chart-line"></i>,
    label: <Link to="/">Dashboard</Link>,
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: <Link to="/leader">Leaderboard</Link>,
  },
  {
    key: "3",
    icon: <i className="fa-solid fa-bag-shopping"></i>,
    label: <Link to="/products">Products</Link>,
  },
];

const AdminLayout = () => {
  return (
    <Layout hasSider>
      <Sider style={siderStyle} width={256} theme="light">
        <Link to="/" className="flex justify-center my-4">
          <img src="/logo.svg" alt="Logo" />
        </Link>

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>

      <Layout className="h-screen overflow-y-hidden flex flex-col">
        <Header className="!bg-white flex items-center justify-end !leading-relaxed">
          <div className="flex gap-x-2">
            <div>
              <img
                src="https://picsum.photos/200/200"
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>

            <div>
              <p className="font-semibold">Admin</p>
              <p className="text-gray-500 text-xs">admin@gmail.com</p>
            </div>
          </div>
        </Header>

        <Content className="overflow-y-auto flex-1 px-4 py-6">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
