import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { images } from "./components/modules/images";
import Account from "./pages/Auth/Account/index";
import { PageHeader } from "./components/layouts";
import "./assets/scss/styles.scss";
import Dashboard from "./pages/Auth/Dashboard";
import Clothes from "./pages/Auth/Clothes";
import Shirt from "./pages/Auth/Clothes/Shirt";
import Pants from "./pages/Auth/Clothes/Pants";
import Accessory from "./pages/Auth/Accessory";
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
    <Link to="/dashboard">
      <img className="logo" src={images.Dashboard} />
    </Link>
  ),
  getItem(
    "Account",
    "2",
    <Link to="/account">
      <img className="logo" src={images.User} />
    </Link>
  ),
  getItem(
    "Clothes",
    "sub1",
    <Link to="/clothes">
      <img className="logo" src={images.Clothes} />
    </Link>,
    [
      getItem(
        <Link to="/clothes/shirt">
        <div>
          <img className="logo" src={images.Shirt} /> Shirt
        </div> </Link>,
        "3"
      ),
      getItem(
        <Link to="/clothes/pants">
        <div>
          <img className="logo" src={images.Pants} />
          Pants
        </div> </Link>,
        "4"
      ),
    ]
  ),
  getItem(
    "Accessory",
    "sub2",
    <Link to="/accessory">
    <img className="logo" src={images.Accessory} />
    </Link>,
    [
      getItem(
        <div>
          <img className="logo" src={images.Shoes} />
          Shoes
        </div>,
        "5"
      ),
      getItem(
        <div>
          <img className="logo" src={images.Bag} />
          Bag
        </div>,
        "6"
      ),
      getItem(
        <div>
          <img className="logo" src={images.Hat} />
          Hat
        </div>,
        "7"
      ),
    ]
  ),
];
export default () => (
  <BrowserRouter>
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
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Account</Breadcrumb.Item>
          <Breadcrumb.Item>Table</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Routes>
            <Route path="/account" element={<Account />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/clothes/shirt" element={<Shirt />} />
            <Route path="/clothes/pants" element={<Pants />} />
            <Route path="/accessory" element={<Accessory />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  </BrowserRouter>
);
