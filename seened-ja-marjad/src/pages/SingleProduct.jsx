import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import config from "../data/config.json"
import '../styles/Article.css'
import Button from '@mui/material/Button';

function SingleArticle() {
  const [products, setProducts] = useState([])
  const {productId} = useParams()
  const found = products.find(product => product.id === Number(productId))

  useEffect(() => {
    fetch(config.ProductDataFromURL)
      .then(res => res.json())
      .then(json => {
        setProducts(json || [])
    })
  }, [productId]);
  
  if (!found) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product-container'>
    <img className='picture' src={found.image} alt="" />
    <div> Toote nimi: {found.name} </div> <br/>
    <div> Toote kilo hind:  {found.price} € </div> <br/>
    <div> Toote kirjeldus: {found.description} </div> <br/>
    <div> Toote säilitamine: {found.preserving} </div> <br/>
    <div> Toote kasutamine: {found.usecase} </div> <br/>
    <Link to={"/"}>
      <Button variant='contained'>Tagasi</Button>
    </Link>
  </div>
  )
}

export default SingleArticle