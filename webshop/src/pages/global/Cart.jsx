import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import cartFromFile from '../../Data/cart.json'

function Cart() {
  const [cart, setCart] = useState(cartFromFile)
  const {t} = useTranslation();

  const add = (chosenProduct) => {
    cart.push(chosenProduct);
    setCart(cart.slice())
  }

  const del = (index) => {
    cart.splice(index, 1)
    setCart(cart.slice())
  }

  const empty = () => {
    cart.splice(0);
    setCart(cart.slice())
  }

  const fullCost = () => {
    let cost = 0;
    cart.forEach(product => cost = cost + product.price)
    return cost;
  }

  return (
    <div>
      {cart.length > 0 && <button onClick={empty}>{t("empty")}</button>}
      {cart.length > 0 && <div>{t("inCart")} {cart.length} {t("product")} </div>}
      {cart.length > 0 && <div>{t("fullCost")} {fullCost()} €</div>}
      {cart.map((product, index) => (
        <div key={product.id}>  
          <div>{product.name} </div>
          <div>{product.price} </div>
          <img className='picture' src={product.image} alt=""/>
          <button onClick={() => add(product)}>+</button>
          <button onClick={() => del(index)}>-</button>
        </div>
      ))}
      { cart.length === 0 && (
        <>
        <div>{t("cartIsEmpty")}</div>
        <Link to="/">{t("addProducts")} </Link>
        </>
      )}
      
    </div>
  )
}

export default Cart