import { Button } from "antd";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("CMS_USER"));

  const onLogout = () => {
    localStorage.removeItem("CMS_USER");
    window.location.href = "/login";
  };

  return (
    <div className="p-3">
      <h1>Xin chào, {user.name}</h1>

      <Button className="mt-1" type="primary" onClick={onLogout}>
        Đăng xuất
      </Button>
    </div>
  );
};

export default Dashboard;
