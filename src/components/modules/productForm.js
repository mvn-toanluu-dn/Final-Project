import { Button, Form, Input, Select } from "antd";
import React from "react";
function productForm(props) {
  const { Option } = Select;
  const { onFinish, onFinishFailed, handleFileChange, nameBtn, classBtn } = props;
  return (
    <Form
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 10,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="CODE"
        name="key"
        rules={[
          {
            required: true,
            message: "Please enter product CODE",
          },
        ]}
      >
        <Input name="key" />
      </Form.Item>
      <Form.Item
        label="NAME"
        name="name"
        rules={[
          {
            required: true,
            message: "Please enter product name",
          },
        ]}
      >
        <Input name="name" />
      </Form.Item>
      <Form.Item
        label="IMAGE"
        name="url"
        rules={[
          {
            required: true,
            message: "Please enter product image",
          },
        ]}
      >
        <input name="url" type="file" onChange={handleFileChange} />
      </Form.Item>
      <Form.Item
        label="PRICE"
        name="price"
        rules={[
          {
            required: true,
            message: "Please enter product price",
          },
          {
            validator: (_, value) =>
              value > 0
                ? Promise.resolve()
                : Promise.reject("Value must be a positive number"),
          },
        ]}
      >
        <Input name="price" />
      </Form.Item>
      <Form.Item
        label="SIZE"
        name="size"
        rules={[
          {
            required: true,
            message: "Please enter product price",
          },
        ]}
      >
        <Select>
          <Option value="S">S</Option>
          <Option value="M">M</Option>
          <Option value="L">L</Option>
          <Option value="XL">XL</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button className={`btn ${classBtn}`} type="primary" htmlType="submit">
          {nameBtn}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default productForm;
