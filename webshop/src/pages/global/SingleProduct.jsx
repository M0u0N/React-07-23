import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
// import productsFromFile from '../../Data/products.json'
import { useTranslation } from 'react-i18next';
import config from "../../Data/config.json"
import { Spinner } from 'react-bootstrap';

function SingleProduct() {
  const [products, setProducts] = useState([])
  const {t} = useTranslation();
  const {productId} = useParams();
  const [isLoading, setLoading] = useState(true)
  const found = products.find(product => product.id === Number(productId))
  

  useEffect(() => {
    fetch(config.products)
    .then(res => res.json())
    .then(json => {
      setProducts(json ||[])
      setLoading(false)
     });
  }, []);

  if (isLoading === true) {
    return <Spinner/>
  }

  if (found === undefined)
  return <div>{t("notFound")} </div>

  return (
    <div>
      <div>{t("prodName")} {found.name} </div>
      <div>{t("prodPrice")} {found.price} € </div>
      <div>{t("prodDescription")} {found.description} </div>
      <img className='picture' src={found.image} alt="" />
      <Link to={"/"}>
        <button>{t("back")}</button>
      </Link>
    </div>
  )
}

export default SingleProduct