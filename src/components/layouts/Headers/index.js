import { Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Avatar from "../../../assets/images/avatar.png";
import useAuth from "../../../hooks/useAuth";
import { images } from "../../modules/images";

const { Header } = Layout;

export default function PageHeader() {
  const { logout } = useAuth();
  const username = useSelector((state) => state.user.value);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Header className="header">
      <div className="logo">
        <h1>
          <Link to="/home/dashboard">ADMIN</Link>
        </h1>
      </div>
      <div className="user">
        <div className="user-img">
          <img src={Avatar} alt={images.Avatar} />
        </div>
        <h6 className="user-info">
          {username?.username ? username.username : user?.username}
        </h6>
        <div className="log-out">
          <NavLink to="/auth/login">
            <button onClick={logout}>Log out</button>
          </NavLink>
        </div>
      </div>
    </Header>
  );
}
