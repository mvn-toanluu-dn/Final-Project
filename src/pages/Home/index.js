import { Layout, Menu } from "antd";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../../assets/scss/styles.scss";
import PageHeader from "../../components/layouts/Headers/";
import { images } from "../../components/modules/images";
import Account from "../Account";
import Shirt from "../Features/Shirt";
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
      <Link to="dashboard">
        <img className="logo" src={images.Dashboard} alt="dashboard" />
      </Link>
    ),
    getItem(
      "Account",
      "2",
      <Link to="account">
        <img className="logo" src={images.Account} alt="account" />
      </Link>
    ),
    getItem(
      "Shirt",
      "3",
      <Link to="shirts">
        <img className="logo" src={images.Clothes} alt="shirt" />
      </Link>
    ),
  ];
  return (
    <>
      <PageHeader />
      <div className="page-main">
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
              <Route path="shirts" element={<Shirt />} />
              <Route path="shirt/:key/edit" element={<EditForm />} />
              <Route path="shirt/:key" element={<ProductDetail />} />
              <Route path="account" element={<Account />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
      </div>
    </>
  );
}
