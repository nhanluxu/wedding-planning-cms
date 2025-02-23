import { Button, Form, Input } from "antd";

const Login = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
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
