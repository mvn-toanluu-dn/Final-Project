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
      <h2>Product Detail</h2>
      <div className="detail-info-title">
        <div className="detail-info flex">
          <img src={currentItem.productLink} alt={currentItem.productLink} />
        </div>
        <div className="detail-title col-9">
          <div className="detail-item">
            <span className="detail-name">{currentItem.name}</span>
          </div>
          <div className="detail-item">
            <span className="detail-price">{currentItem.price}</span>
          </div>
          <div className="detail-item">
            <span className="detail-size">Size: {currentItem.size}</span>
          </div>
          <div className="detail-item">
            <span className="detail-description">
              Description: {currentItem.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
