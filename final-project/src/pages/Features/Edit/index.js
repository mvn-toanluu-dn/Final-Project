import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import openNotificationWithIcon from "../../../components/animations";
export default function EditForm() {
  const { Option } = Select;
  const { key } = useParams();
  const [productList] = useState(JSON.parse(localStorage.getItem("products")));
  const [url, setUrl] = useState("");
  const currentItem = productList.find(
    (record) => record.key.toString() === key
  );
  let navigate = useNavigate();
  const ArrayEdit = productList;
  const handleFileChange = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      setUrl(e.target.result);
    };
  };
  function onFinish(values) {
    const currentValue = ArrayEdit.find(
      (record) => record.key === currentItem.key
    );
    const indexValue = ArrayEdit.indexOf(currentValue);
    ArrayEdit[indexValue].name = values.name;
    ArrayEdit[indexValue].price = values.price;
    ArrayEdit[indexValue].size = values.size;
    url === ""
      ? (ArrayEdit[indexValue].productLink = currentItem.productLink)
      : (ArrayEdit[indexValue].productLink = url);
    localStorage.setItem("products", JSON.stringify(ArrayEdit));
    openNotificationWithIcon("success", "Updated Product");
    navigate("/home/clothes/shirt");
  }
  return (
    <Form
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 10,
      }}
      onFinish={onFinish}
      initialValues={currentItem}
    >
      <Form.Item
        label="ID"
        name={["key"]}
        rules={[
          {
            required: true,
            message: "Please enter product ID",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="NAME"
        name={["name"]}
        rules={[
          {
            required: true,
            message: "Please enter product name",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="IMAGE"
        name="image"
        rules={[
          {
            required: true,
            message: "Please add product image",
          },
        ]}
      >
        <input type="file" onChange={handleFileChange} />
      </Form.Item>
      <Form.Item
        label="PRICE"
        name={["price"]}
        rules={[
          {
            required: true,
            message: "Please enter product price",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="SIZE"
        name={["size"]}
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
        <Button className="btn btn-update" type="primary" htmlType="submit">
          Edit
        </Button>
      </Form.Item>
    </Form>
  );
}
