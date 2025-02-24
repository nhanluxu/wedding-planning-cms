import { Button, Form, Input } from "antd";

const Login = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute w-0.5 bg-black h-screen -rotate-45 -top-[16%] right-0"></div>
      <div className="absolute w-2.5 bg-black h-screen -rotate-45 -top-[24%] right-[10%]"></div>

      <div className="absolute w-0.5 bg-black h-screen -rotate-45 -bottom-[16%] left-0"></div>
      <div className="absolute w-2.5 bg-black h-screen -rotate-45 -bottom-[24%] left-[10%]"></div>

      <div className="mb-8">
        <img src="/logo.svg" alt="Logo" className="h-10" />
      </div>

      <Form layout="vertical" className="w-[300px]">
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập username",
            },
          ]}
        >
          <Input placeholder="Nhập username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu",
            },
          ]}
        >
          <Input.Password placeholder="Nhập mật khẩu" />
        </Form.Item>

        <Button type="primary" className="w-full">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
