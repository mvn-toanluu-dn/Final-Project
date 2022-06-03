import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import openNotificationWithIcon from "../../../components/animations";
import useAuth from "../../../hooks/useAuth";
import { getUserInfo } from "../../../stores/userSlice";

function Login() {
  const { login } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataAdmin = [
    {
      username: "admin@gmail.com",
      password: "admin123",
    },
  ];
  const onFinish = (value) => {
    const findInfo = dataAdmin.find((item) => {
      return (
        item.username === value.username && item.password === value.password
      );
    });
    if (!value.username || !value.password) {
      openNotificationWithIcon("error", "Missing Params!");
      return;
    } else if (findInfo === undefined) {
      openNotificationWithIcon("error", "Incorrect email or password!");
      return;
    } else {
      openNotificationWithIcon("success", "Logged in successfully");
      login(value.username, value.password);
      dispatch(getUserInfo(findInfo));
    }
  };
  const user = localStorage.getItem("user");
  useEffect(() => {
    user && navigate("/account", { replace: true });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="page-login">
      <div className="form">
        <Form
          className="login-form"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <h1 className="login-title">Login</h1>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
