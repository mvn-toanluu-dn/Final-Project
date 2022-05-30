import React, { useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetail() {
  const { key } = useParams();
  const [productList] = useState(JSON.parse(localStorage.getItem("products")));
  const currentItem = productList.find(
    (record) => record.key.toString() === key
  );
  return (
    <div className="product-detail">
      <div className="detail-info flex">
        <img src={currentItem.productLink} alt={currentItem.productLink} />
      </div>
      <div className="info-detail">
        <div className="detail-item">
          <span className="detail-name">{currentItem.name}</span>
        </div>
        <div className="detail-item">
          <span className="detail-price">PRICE: {currentItem.price}</span>
        </div>
        <div className="detail-item">
          <span className="detail-size">SIZE: {currentItem.size}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
