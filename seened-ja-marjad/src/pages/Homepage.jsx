import React, { useState, useEffect} from 'react'
import config from "../data/config.json"
import styles from "../styles/HomePage.module.css"
import '../styles/Homepage.css'
import SortButtons from '../components/SortButtons'
import FilterButtons from '../components/FilterButtons'
import Product from "../components/Product"
import {Spinner} from 'react-bootstrap'

function Homepage() {
    const [products, setProducts] = useState([])
    const [categories] = useState([])
    const [dbProducts, setDbProducts] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(config.ProductDataFromURL)
        .then(res => res.json())
        .then(json => {
            setProducts(json.slice() || [])
            setDbProducts(json.slice() || [])
            setLoading(false)
        })
    }, []);

    const reset = () => {
        setProducts(dbProducts.slice())
    }

    if (isLoading === true) {
        return <Spinner variant='success'/>
    }

  return (
    <div>
        <div className="text"> Tooteid kokku: {products.length} tükki </div>
        <div className="text2">Hinnad on kõik €/kg </div>
        <br />
            <div className='reset'>
                <button onClick={reset}>Reset</button>
            </div>
        <br /> <br/>

    <div className='button-container'>
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
    </div>
      <div className={styles.products}>
      {products.map((product, index) => (
      <Product key={product.id} product={product} />
      ))}</div>



    </div>
  )
}

export default Homepage