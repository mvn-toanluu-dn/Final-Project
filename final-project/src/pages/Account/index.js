import React from "react";
import { images } from "../../components/modules/images";

function Account() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="account">
      <h1 className="title-page">Account</h1>
      <div className="account-content">
        <div className="account-img">
          <img src={images.AdminIMG} alt={images.AdminIMG} />
        </div>
        <div className="account-info">
          <p>Email: {user.username}</p>
        </div>
      </div>
    </div>
  );
}

export default Account;
