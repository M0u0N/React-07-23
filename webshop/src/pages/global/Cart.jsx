import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import styles from "../../css/Cart.module.css"
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
import { CartSumContext } from '../../store/CartSumContext';
// import cartFromFile from '../../Data/cart.json'

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]" ))
  const {t} = useTranslation();
  const { setCartSum } = useContext(CartSumContext);

 
  const del = (index) => {
    cart.splice(index, 1)
    setCart(cart.slice())
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum (fullCost())
  }

  const empty = () => {
    cart.splice(0);
    setCart(cart.slice())
    toast.success("cart emptied")
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum (fullCost())
  }

  const fullCost = () => {
    let cost = 0;
    cart.forEach((cartProduct) => (cost = cost + cartProduct.product.price * cartProduct.quantity))
    return cost.toFixed(2);
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1)
    }
    setCart(cart.slice())
    localStorage.setItem("cart", JSON.stringify(cart))
    setCartSum (fullCost())
  }

  const increaseQuantity = (index) => {
    cart[index].quantity++;
    setCart(cart.slice())
    localStorage.setItem("cart", JSON.stringify(cart))
    setCartSum (fullCost())
  }

  



  return (
    <div>
      {cart.length > 0 && <button onClick={empty}>{t("empty")}</button>}
      {cart.length > 0 && <div>{t("inCart")} {cart.length} {t("product")} </div>}
      {cart.length > 0 && <div>{t("fullCost")} {fullCost()} €</div>} <br/>
      {cart.map((cartProduct, index) => (
        <div className={styles.product} key={index}>
          <img className={styles.image} src={cartProduct.product.image} alt=""/> <br/>  
          <div className={styles.name}>{cartProduct.product.name} </div>
          <div className={styles.price}>{(cartProduct.product.price).toFixed(2)} </div>
          <div className={styles.quantity}>
            <img src="/minus.png" alt="" className={styles.button} onClick={() => decreaseQuantity(index)} />
            <div>{cartProduct.quantity} tk </div>
            <img src="/plus.png" alt="" className={styles.button} onClick={() => increaseQuantity(index)}/>
          </div>
          <div className='total' > {(cartProduct.product.price  * cartProduct.quantity).toFixed(2)} € </div>
          <img src="/remove.png" alt="" className={styles.button} onClick={() => del(index)}/> <br/>
        </div>
      ))}
      { cart.length === 0 && (
        <>
        <div>{t("cartIsEmpty")}</div>
        <Link to="/">{t("addProducts")} </Link>
        </>
      )}
      <ToastContainer
        position="bottom-right"
        theme="dark"
      
      /> 
        {cart.length > 0 &&
          <div className={styles.cart__bottom}>
            <ParcelMachines/>
            <div>Summary: {fullCost()} € </div>
            <Payment sum={fullCost()}/>
          </div>}



    </div>
  )
}

export default Cart