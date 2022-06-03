import { Button, Form, Input, Select } from "antd";
import React from "react";
function productForm(props) {
  const { Option } = Select;
  const {
    onFinish,
    onFinishFailed,
    handleFileChange,
    nameBtn,
    classBtn,
    initialValues,
  } = props;
  return (
    <Form
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 10,
      }}
      autoComplete="off"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Code"
        name="key"
        initialValue={initialValues.key}
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
        label="Name"
        name="name"
        initialValue={initialValues.name}
        rules={[
          {
            required: true,
            message: "Please enter product name",
          },
        ]}
      >
        <Input name="name" />
      </Form.Item>
      {nameBtn === "Create" && (
        <Form.Item
          label="Image"
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
      )}
      {nameBtn === "Update" && (
        <Form.Item label="Image" name="url">
          <input name="url" type="file" onChange={handleFileChange} />
        </Form.Item>
      )}
      <Form.Item
        label="Price"
        name="price"
        initialValue={initialValues.price}
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
        label="Size"
        name="size"
        initialValue={initialValues.size}
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
      <Form.Item
        label="Description"
        name="description"
        initialValue={initialValues.description}
        rules={[
          {
            required: true,
            message: "Please enter description product",
          },
        ]}
      >
        <Input name="description" />
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
