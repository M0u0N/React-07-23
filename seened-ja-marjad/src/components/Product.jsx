import React from 'react'
import styles from '../styles/HomePage.module.css'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'

function Product({product}) {

  return (
    <div>
        <div className={styles.product}>
        <img src={product.image} alt="" />
        <div className={styles.name}> {product.name} </div>
        <div> {(product.price).toFixed(2)} €</div>
            <Link to={"/product/" + product.id}>
            <Button variant='contained'>Toote info </Button>
            </Link>
        <div>
        </div>
    </div>
    </div>
  )
}

export default Product