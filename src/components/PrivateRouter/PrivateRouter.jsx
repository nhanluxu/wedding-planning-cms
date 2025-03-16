import { Flex, Spin } from "antd";
import { useEffect } from "react";

const PrivateRouter = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("CMS_USER"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, [user]);

  if (!user) {
    return (
      <Flex align="center" justify="center" className="h-screen">
        <Spin />
      </Flex>
    );
  }

  return children;
};

export default PrivateRouter;
