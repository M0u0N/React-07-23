import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
// import productsFromFile from "../../Data/products.json"
// import cartFromFile from "../../Data/cart.json"
import config from "../../Data/config.json"
import styles from "../../css/HomePage.module.css"
import { Spinner, Button as BButton } from 'react-bootstrap';
import Button from '@mui/material/Button';
import CarouselGallery from '../../components/home/CarouselGallery';
import SortButtons from '../../components/home/SortButtons';
import FilterButtons from '../../components/home/FilterButtons';


function HomePage () {
  const [products, setProducts] = useState([]);
  const {t} = useTranslation();
  const [categories, setCategories] = useState([])
  const [dbProducts, setDbProducts] = useState([])
  const [isLoading, setLoading] = useState(true)

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
      setProducts(json.slice() || [])
      setDbProducts(json.slice() || [])
      setLoading(false)
    })

    fetch(config.categories)
    .then(res => res.json())
    .then(json => setCategories(json || []))
  }, []);


  const reset = () => {
    setProducts(dbProducts.slice());
  }

    
    if (isLoading === true) {
      return <Spinner variant='success'/>
    }


  return (
    <div>
      <CarouselGallery/>
      <div> {t("ttlProd")} {products.length} {t("pcs")} </div>
      <br /> 
      <button onClick={reset}>Reset</button> 
      <br /> <br/>
     <SortButtons
        products={products}
        setProducts={setProducts}
     />
      <br /> <br />
      <FilterButtons
        dbProducts={dbProducts}
        categories={categories}
        setProducts={setProducts}
      />
      <br /> <br/>

      <div className={styles.products}>
      {products.map((product, index) => (
      <div key={product.id} className={styles.product}>
        <img src={product.image} alt="" />
        <div className={styles.name}> {product.name} </div>
        <div> {(product.price).toFixed(2)} €</div>
        <Button variant="contained" onClick={() => addCart(product)}>{t("addCart")}</Button>
        <Link to={"/product/" + product.id}>
          <Button>{t("lookCloser")} </Button>
      </Link>
      </div>
      ))}</div>
       <ToastContainer
        position="bottom-right"
        theme="dark"
      
      />  
    </div>
  )

  
}

export default HomePage