import React from "react";
import { images } from "../../components/modules/images";

function Account() {
  const user = JSON.parse(localStorage.getItem("user"));
  const adminName = {
    firstname: "Toan",
    lastname: "Luu",
  };
  return (
    <>
      <div className="account">
        <img
          className="bg-img"
          src={images.background}
          alt={images.background}
        />
        <div className="account-content">
          <div className="account-img">
            <img src={images.AdminIMG} alt={images.AdminIMG} />
            <p className="account-info">Email: {user.username}</p>
            <p className="account-info name">
              Name: {`${adminName.firstname} ${adminName.lastname}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
