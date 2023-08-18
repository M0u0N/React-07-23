import React, { useState } from 'react'
import productsFromFile from '../../Data/products.json'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const {t} = useTranslation();

  const del = (index) => {
    productsFromFile.splice(index, 1);
    toast.warn(t("itemRemoved"))
    setProducts(productsFromFile.slice())
  }


  return (
    <div>
      <div> {t("ttlProd")} {products.length} {t("pcs")} </div>
      <br />
      {products.map((product, index) => (
      <div key={product.id}>
        <img src={product.image} alt="" />
        <div>{product.id}</div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.category}</div>
        <div>{product.description}</div>
        <button onClick={() => del()}>{t("delete")}</button>
        <Button as={Link} to={"/admin/edit-product/" + product.id}>{t("edit")}</Button>
      </div>
      ))}
      <ToastContainer
        position="top-right"
        theme="dark"
      
      />  
    </div>
  )
}

export default MaintainProducts