import { Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const { Header } = Layout;

export default function PageHeader() {
  const { logout } = useAuth();
  const username = useSelector((state) => state.user.value);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Header className="header">
      <h1 className="logo">
        <Link to="/dashboard">ADMIN</Link>
      </h1>
      <div className="user">
        <NavLink to="/account">
          <h6 className="user-info">
            {username?.username ? username.username : user?.username}
          </h6>
        </NavLink>
        <NavLink to="/login">
          <button className="log-out" onClick={logout}>
            Log out
          </button>
        </NavLink>
      </div>
    </Header>
  );
}
