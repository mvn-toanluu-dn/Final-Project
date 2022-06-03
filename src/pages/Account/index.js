import React from "react";
import { images } from "../../components/modules/images";

function Account() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="account">
      <img className="bg-img" src={images.background} alt={images.background} />
      <div className="account-content">
        <div className="account-img">
          <img src={images.AdminIMG} alt={images.AdminIMG} />
        </div>
        <div className="account-info m-30">
          <p className="account-email">Email: {user.username}</p>
        </div>
      </div>
    </div>
  );
}

export default Account;
