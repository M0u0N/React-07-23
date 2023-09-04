import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "../../css/Cart.css"
// import cartFromFile from '../../Data/cart.json'

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]" ))
  const {t} = useTranslation();

  const [parcelMachines, setParcelMachines] = useState([]);
  // const add = (chosenProduct) => {
  //   cart.push(chosenProduct);
  //   setCart(cart.slice())
  // }

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
    .then(res => res.json())
    .then(json => setParcelMachines(json))
  }, []);

  const del = (index) => {
    cart.splice(index, 1)
    setCart(cart.slice())
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const empty = () => {
    cart.splice(0);
    setCart(cart.slice())
    toast.success("cart emptied")
    localStorage.setItem("cart", JSON.stringify(cart));
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
  }

  const increaseQuantity = (index) => {
    cart[index].quantity++;
    setCart(cart.slice())
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  const pay = () => {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentBody = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": fullCost(),
      "order_reference": Math.random() * 999999999,
      "nonce": "a9b7f7e79sd" + Math.random() * 99999999 + new Date(),
      "timestamp": new Date(),
      "customer_url": "https://kagufy.web.app/"
      } ;
    const paymentHeaders = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    };

    fetch(url, {method:  "POST", body: JSON.stringify(paymentBody), headers: paymentHeaders})
    .then(res => res.json())
    .then(json => window.location.href = json.payment_link);
  }



  return (
    <div>
      {cart.length > 0 && <button onClick={empty}>{t("empty")}</button>}
      {cart.length > 0 && <div>{t("inCart")} {cart.length} {t("product")} </div>}
      {cart.length > 0 && <div>{t("fullCost")} {fullCost()} €</div>} <br/>
      {cart.map((cartProduct, index) => (
        <div className='product' key={index}>
          <img className='image' src={cartProduct.product.image} alt=""/> <br/>  
          <div className='name'>{cartProduct.product.name} </div>
          <div className='price'>{(cartProduct.product.price).toFixed(2)} </div>
          <div className='quantity'>
            <img src="/minus.png" alt="" className='button' onClick={() => decreaseQuantity(index)} />
            <div>{cartProduct.quantity} tk </div>
            <img src="/plus.png" alt="" className='button' onClick={() => increaseQuantity(index)}/>
          </div>
          <div className='total' > {(cartProduct.product.price  * cartProduct.quantity).toFixed(2)} € </div>
          <img src="/remove.png" alt="" className='button' onClick={() => del(index)}/> <br/>
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
          <div>
            <select>{parcelMachines.filter(pm => pm.A0_NAME === "EE").map(pm => <option key={pm.NAME}>{pm.NAME}</option>) }</select>
            <div>Summary: {fullCost()} € </div>
            <button onClick={pay}>Maksma</button>
          </div>}



    </div>
  )
}

export default Cart