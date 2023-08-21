import React from 'react'
import { useParams, Link } from 'react-router-dom'
import productsFromFile from '../../Data/products.json'
import { useTranslation } from 'react-i18next';

function SingleProduct() {
  const {t} = useTranslation();
  const {productId} = useParams();
  const found = productsFromFile.find(product => product.id === Number(productId))

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