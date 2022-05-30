import { Table, Space, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Add from "../../../../assets/images/icon-add.jpg";
import Delete from "../../../../assets/images/icon-delete.png";
import Edit from "../../../../assets/images/icon-edit.png";
import openNotificationWithIcon from "../../../../components/animations";
import { images } from "../../../../components/modules/images";
import ProductForm from "../../../../components/modules/productForm";

function Shirt() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productLink, setProductLink] = useState("");
  const [productList, setProductList] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productList));
  }, [productList]);

  let navigate = useNavigate();

  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      filters: [
        {
          text: "Áo thun",
          value: "Áo thun",
        },
        {
          text: "Áo khoác",
          value: "Áo khoác",
        },
        {
          text: "Áo sơ mi",
          value: "Áo sơ mi",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: "20%",
    },
    {
      title: "Image",
      dataIndex: "productLink",
      render: (productLink) => <img src={productLink} alt="" />,
      width: "20%",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      with: "25%",
    },
    {
      title: "Size",
      dataIndex: "size",
      filters: [
        {
          text: <span>M</span>,
          value: "M",
        },
        {
          text: <span>L</span>,
          value: "L",
        },
        {
          text: <span>XL</span>,
          value: "XL",
        },
      ],
      onFilter: (value, record) => record.size.startsWith(value),
      filterSearch: (input, record) => record.value.indexOf(input) > -1,
      width: "15%",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Link to={`detail/${record.key}`}>
            <button className="btn-detail">
              <img src={images.Details} alt="details" />
            </button>
          </Link>
          <Link to={`edit/${record.key}`}>
            <button className="btn-edit">
              <img src={Edit} alt="edit" />
            </button>
          </Link>
          <button
            onClick={() => handleOnDelete(record.key)}
            className="btn-delete"
          >
            <img src={Delete} alt="delete" />
          </button>
        </Space>
      ),
      width: "15%",
    },
  ];
  const handleOnDelete = (key) => {
    Modal.confirm({
      title: "Are you sure to delete this product ?",
      okText: "yes",
      okType: "danger",
      onOk: () => {
        const dataProduct = productList.filter((record) => record.key !== key);
        openNotificationWithIcon("success", "Delete Product");
        setProductList(dataProduct);
      },
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (emp) => {
      setProductLink(emp.target.result);
    };
  };

  const onFinish = (ref) => {
    console.log(ref);
    const newProduct = { ...ref, productLink };
    const newProductList = [...productList, newProduct];
    openNotificationWithIcon("success", "Create Product");
    setProductList(newProductList);
    navigate("/home/clothes/shirt");
  };

  const onFinishFailed = (error) => {
    console.log("Failed:", error);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (values) => {
    setIsModalVisible(false);
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      <button onClick={showModal} className="btn-create p-10">
        <img src={Add} alt="Add" />
        <h6>Create Product</h6>
      </button>
      <Modal
        title="Create Product"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ProductForm
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          handleFileChange={handleFileChange}
          productLink={productLink}
        />
      </Modal>
      <Table
        columns={columns}
        dataSource={productList}
        onChange={onChange}
        handleOnDelete={handleOnDelete}
      />
    </>
  );
}

export default Shirt;
