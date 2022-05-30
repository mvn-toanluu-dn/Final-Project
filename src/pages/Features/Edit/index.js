import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import openNotificationWithIcon from "../../../components/animations";
import ProductForm from "../../../components/modules/productForm";
export default function EditForm() {
  const { key } = useParams();
  const [productList] = useState(JSON.parse(localStorage.getItem("products")));
  const [url, setUrl] = useState("");
  const currentItem = productList.find(
    (record) => record.key.toString() === key
  );
  console.log(currentItem);
  let navigate = useNavigate();
  const ArrayEdit = productList;
  const handleFileChange = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      setUrl(e.target.result);
    };
  };
  function onFinish(values) {
    const currentValue = ArrayEdit.find(
      (record) => record.key === currentItem.key
    );
    const indexValue = ArrayEdit.indexOf(currentValue);
    ArrayEdit[indexValue].name = values.name;
    ArrayEdit[indexValue].price = values.price;
    ArrayEdit[indexValue].size = values.size;
    url === ""
      ? (ArrayEdit[indexValue].productLink = currentItem.productLink)
      : (ArrayEdit[indexValue].productLink = url);
    localStorage.setItem("products", JSON.stringify(ArrayEdit));
    openNotificationWithIcon("success", "Updated Product");
    navigate("/home/shirt");
  }
  return (
    <>
      <ProductForm
        onFinish={onFinish}
        handleFileChange={handleFileChange}
        initialValues={currentItem}
        currentItem={currentItem}
        classBtn="btn-update"
        nameBtn="Update"
      />
    </>
  );
}
