import React, { useRef, useState, useEffect } from "react";
// import productsFromFile from "../../Data/products.json";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import config from "../../Data/config.json"

function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();
  const searchedRef = useRef();

  const [dbProducts, setDbProducts] = useState([])


  useEffect(() => {
    fetch(config.products)
    .then(res => res.json())
    .then(json => {
      setProducts(json || [])
      setDbProducts(json || [])
    })
  }, []);

  const deleteProduct = (index) => {
    dbProducts.splice(index, 1);
    toast.warn(t("itemRemoved"));
    setProducts(dbProducts.slice());
  };

  const searchFromProducts = () => {
    const result = dbProducts.filter((product) =>
      product.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()) || 
      product.description.toLowerCase().includes(searchedRef.current.value.toLowerCase()) ||
      product.id.toString().includes(searchedRef.current.value)
      );
    setProducts(result);
  };

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <div>
        {" "}
        {t("ttlProd")} {products.length} {t("pcs")}{" "}
      </div>
      <br />
      {products.map((product, index) => (
        <div key={product.id} className={product.active ? "active" : "inactive"} >
          <img src={product.image} alt="" />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <button onClick={() => deleteProduct(index)}>{t("delete")}</button>
          <Button as={Link} to={"/admin/edit-product/" + product.id}>
            {t("edit")}
          </Button>
        </div>
      ))}
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}

export default MaintainProducts;
