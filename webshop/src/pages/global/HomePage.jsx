

import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import productsFromFile from "../../Data/products.json"
import cartFromFile from "../../Data/cart.json"



function HomePage () {
  const [products, setProducts] = useState(productsFromFile.filter(product => product.active === true));
  const {t} = useTranslation();

  const addCart = (chosenProduct) => {
    cartFromFile.push(chosenProduct);
    toast.success(t("itemAddedToCart"))
    setProducts(productsFromFile.slice())
 }

  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
      setProducts(products.slice())
    }
  
  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
      setProducts(products.slice())
    }
  
  const sortPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
      setProducts(products.slice())
    }
  
  const sortPriceDesc = () => {
    products.sort((a, b) => b.price - a.price);
      setProducts(products.slice())
    }

  const filterMemoryBank = () => {
    const ans = products.filter(product => product.category === "memory bank")
      setProducts(ans)
    }
 
  const filterUSBDrive = () => {
    const ans = products.filter(product => product.category === "usb drive")
      setProducts(ans)
    }



  return (
    <div>
      <div> {t("ttlProd")} {products.length} {t("pcs")} </div>
      <br /> 
      <button onClick={() => sortAZ()}>{t("sortAZ")} </button>
      <button onClick={() => sortZA()}>{t("sortZA")}</button>
      <button onClick={() => sortPriceAsc()}>{t("sortPA")}</button>
      <button onClick={() => sortPriceDesc()}>{t("sortPD")}</button>
      <br /> <br />
      <button onClick={() => filterMemoryBank()}>{t("filtMB")}</button>
      <button onClick={() => filterUSBDrive()}>{t("filtUSBD")}</button>
      <br /> <br/>

      {products.map((product, index) => (
      <div key={product.id}>
        <img src={product.image} alt="" />
        <div> {product.name} </div>
        <div> {product.price} €</div>
        <button onClick={() => addCart(product)}>{t("addCart")}</button>
        <Link to={"/product/" + product.name}>
          <button>{t("lookCloser")} </button>
      </Link>
      </div>
      
      ))}
       <ToastContainer
        position="top-right"
        theme="dark"
      
      />  
    </div>
  )

  
}

export default HomePage