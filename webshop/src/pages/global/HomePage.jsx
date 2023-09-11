import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react'
// import productsFromFile from "../../Data/products.json"
// import cartFromFile from "../../Data/cart.json"
import config from "../../Data/config.json"
import styles from "../../css/HomePage.module.css"
import CarouselGallery from '../../components/home/CarouselGallery';
import SortButtons from '../../components/home/SortButtons';
import FilterButtons from '../../components/home/FilterButtons';
import Product from '../../components/home/Product';
import { Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';


function HomePage () {
  const [products, setProducts] = useState([]);
  const {t} = useTranslation();
  const [categories, setCategories] = useState([])
  const [dbProducts, setDbProducts] = useState([])
  const [isLoading, setLoading] = useState(true)


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
      <Product key={product.id} product={product} />
      ))}</div>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        />  
    </div>
    
  )

  
}

export default HomePage