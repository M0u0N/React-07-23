import React, { useRef, useState, useEffect } from "react";
// import productsFromFile from "../../Data/products.json";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import {Spinner} from 'react-bootstrap'
import config from "../../Data/config.json";
import '../../css/MaintainProducts.css'

function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();
  const searchedRef = useRef();
  const [dbProducts, setDbProducts] = useState([])
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    fetch(config.products)
    .then(res => res.json())
    .then(json => {
      setProducts(json || [])
      setDbProducts(json || [])
      setLoading(false)
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

  if (isLoading === true) {
    return <Spinner/>
  }

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <div>
        {" "}
        {t("ttlProd")} {products.length} {t("pcs")}{" "}
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
        <tr key={product.id} className={product.active ? "active" : "inactive"} >
          <td><img src={product.image} alt="" /></td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.category}</td>
          <td>{product.description}</td>
          <td>
          <button onClick={() => deleteProduct(index)}>{t("delete")}</button>
          <Button as={Link} to={"/admin/edit-product/" + product.id}>
            {t("edit")}
          </Button>
          </td>
        </tr>
      ))}
        </tbody>
      </table>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}

export default MaintainProducts;
