import { Layout, Menu } from "antd";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../../assets/scss/styles.scss";
import PageHeader from "../../components/layouts/Headers/";
import { images } from "../../components/modules/images";
import Account from "../Account";
import Shirt from "../Features/Clothes/Shirt";
import Dashboard from "../Features/Dashboard";
import EditForm from "../Features/Edit";
import ProductDetail from "../Features/ProductDetail";
export default function Home({ children }) {
  const { Content, Sider } = Layout;
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem(
      "Dashboard",
      "1",
      <Link to="/home/dashboard">
        <img className="logo" src={images.Dashboard} alt="dashboard" />
      </Link>
    ),
    getItem(
      "Account",
      "2",
      <Link to="/home/account">
        <img className="logo" src={images.Account} alt="account" />
      </Link>
    ),
    getItem(
      "Clothes",
      "sub1",
      <Link to="/home/clothes">
        <img className="logo" src={images.Clothes} alt="clothes" />
      </Link>,
      [
        getItem(
          <Link to="/home/clothes/shirt">
            <div>
              <img className="logo" src={images.Shirt} alt="shirt" /> Shirt
            </div>{" "}
          </Link>,
          "3"
        ),
      ]
    ),
  ];
  return (
    <>
      <PageHeader />
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="clothes/shirt" element={<Shirt />} />
              <Route path="clothes/shirt/edit/:key" element={<EditForm />} />
              <Route
                path="clothes/shirt/detail/:key"
                element={<ProductDetail />}
              />
              <Route path="account" element={<Account />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}