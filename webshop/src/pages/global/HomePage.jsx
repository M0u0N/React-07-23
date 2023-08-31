import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';

import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
// import productsFromFile from "../../Data/products.json"
// import cartFromFile from "../../Data/cart.json"
import config from "../../Data/config.json"


function HomePage () {
  const [products, setProducts] = useState([]);
  const {t} = useTranslation();
  const [categories, setCategories] = useState([])
  const [dbProducts, setDbProducts] = useState([])

  const addCart = (chosenProduct) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]" );
    const index = cart.findIndex(cartProduct => cartProduct.product.id === chosenProduct.id);
    if (index >= 0) {
      cart[index].quantity = cart[index].quantity +1
    } else {
      cart.push({ "quantity": 1, "product": chosenProduct});
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success(t("itemAddedToCart"))
 }

  useEffect(() => {
    fetch(config.products)
    .then(res => res.json())
    .then(json => {
      setProducts(json || [])
      setDbProducts(json || [])
    })

    fetch(config.categories)
    .then(res => res.json())
    .then(json => setCategories(json || []))
  }, []);


  const reset = () => {
    setProducts(dbProducts);
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

  // const filterMemoryBank = () => {
  //   const ans = products.filter(product => product.category === "memory bank")
  //     setProducts(ans)
  //   }
 
  // const filterUSBDrive = () => {
  //   const ans = products.filter(product => product.category === "usb drive")
  //     setProducts(ans)
  //   }

    const filterByCategory = (categoryClicked) => {
      const ans = dbProducts.filter(product => product.category === categoryClicked)
        setProducts(ans)
      }
    

  return (
    <div>
      <div> {t("ttlProd")} {products.length} {t("pcs")} </div>
      <br /> 
      <button onClick={reset}>Reset</button>
      <button onClick={() => sortAZ()}>{t("sortAZ")} </button>
      <button onClick={() => sortZA()}>{t("sortZA")}</button>
      <button onClick={() => sortPriceAsc()}>{t("sortPA")}</button>
      <button onClick={() => sortPriceDesc()}>{t("sortPD")}</button>
      <br /> <br />
      {/* <button onClick={() => filterByCategory("memory bank")}>{t("filtMB")}</button>
      <button onClick={() => filterByCategory("usb drive")}>{t("filtUSBD")}</button> */}
      {categories.map(category => <button key={category.name} onClick={() => filterByCategory(category.name)}>{t(category.name)}</button>)}


      <br /> <br/>

      {products.map((product, index) => (
      <div key={product.id}>
        <img src={product.image} alt="" />
        <div> {product.name} </div>
        <div> {(product.price).toFixed(2)} €</div>
        <button onClick={() => addCart(product)}>{t("addCart")}</button>
        <Link to={"/product/" + product.id}>
          <button>{t("lookCloser")} </button>
      </Link>
      </div>
      
      ))}
       <ToastContainer
        position="bottom-right"
        theme="dark"
      
      />  
    </div>
  )

  
}

export default HomePage