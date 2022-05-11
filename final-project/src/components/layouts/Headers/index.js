import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/images/avatar.png";
const { Header } = Layout;

export default function PageHeader() {
  return (
    <Header className="header">
      <div className="logo">
        <h1>
          <Link to="/">ADMIN</Link>
        </h1>
      </div>
      <div className="user">
        <div className="user-img">
          <img src={Avatar}></img>
        </div>
      </div>
    </Header>
  );
}
