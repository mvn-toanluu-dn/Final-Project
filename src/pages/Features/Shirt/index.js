import { Input, Modal, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Add from "../../../assets/images/icon-add.jpg";
import openNotificationWithIcon from "../../../components/animations";
import ProductForm from "../../../components/modules/productForm";
function Shirt() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productLink, setProductLink] = useState("");
  const [productList, setProductList] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const initialValues = {};
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productList));
  }, [productList]);

  const [searchParam] = useState(["name", "price", "size"]);

  const [search, setSearch] = useState("");
  const queryName = (productList) => {
    return productList.filter((record) =>
      searchParam.some((key) =>
        record[key].toString().toLowerCase().includes(search.toLowerCase())
      )
    );
  };

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
      width: "25%",
    },
    {
      title: "Image",
      dataIndex: "productLink",
      render: (productLink) => <img src={productLink} alt="" />,
      width: "15%",
    },
    {
      title: "Price",
      // dataIndex: "price",
      render: (a) => <span>{`${a.price} $`}</span>,
      sorter: (a, b) => a.price - b.price,
      with: "10%",
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
      width: "10%",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => <span>{text}</span>,
      width: "20%",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Link to={`/shirt/${record.key}`}>
            <button className="btn-detail">
              <RiEyeCloseLine className="close-eye" />
              <RiEyeLine className="open-eye" />
            </button>
          </Link>
          <Link to={`/shirt/${record.key}/edit`}>
            <button className="btn-edit">
              <FiEdit2 />
            </button>
          </Link>
          <button
            onClick={() => handleOnDelete(record.key)}
            className="btn-delete"
          >
            <MdDelete />
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
        openNotificationWithIcon("success", "Deleted Product");
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
    const newProductList = [newProduct, ...productList];
    setProductList(newProductList);
    openNotificationWithIcon("success", "Created Product");
    navigate("/shirts");
    setIsModalVisible(false);
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
    <section className="shirt-page section-padding">
      <h2>Products</h2>
      <div className="management">
        <Input
          placeholder="Search product ..."
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
          suffix={<BiSearch classname="search-icon" />}
        />
        <button onClick={showModal} className="btn-create p-10">
          <img src={Add} alt="Add" />
          <p>Create Product</p>
        </button>
      </div>
      <Modal
        title="Create Product"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <ProductForm
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          handleFileChange={handleFileChange}
          productLink={productLink}
          initialValues={initialValues}
          nameBtn="Create"
          classBtn="btn-add"
        />
      </Modal>
      <Table
        columns={columns}
        dataSource={queryName(productList)}
        onChange={onChange}
        handleOnDelete={handleOnDelete}
        pagination={{ pageSize: 3 }}
      />
    </section>
  );
}

export default Shirt;
