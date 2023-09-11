import React, {useContext} from 'react'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import styles from "../../css/HomePage.module.css"
import { CartSumContext } from '../../store/CartSumContext';

function Product({product} ) {
    const {t} = useTranslation();
    const { setCartSum } = useContext(CartSumContext)

    const addCart = (chosenProduct) => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]" );
        const index = cart.findIndex(cartProduct => cartProduct.product.id === chosenProduct.id);
        if (index >= 0) {
          cart[index].quantity = cart[index].quantity +1
        } else {
          cart.push({ "quantity": 1, "product": chosenProduct});
        }
        
        let cost = 0;
        cart.forEach((cartProduct) => (cost = cost + cartProduct.product.price * cartProduct.quantity))
        setCartSum(cost.toFixed(2))



        localStorage.setItem("cart", JSON.stringify(cart));
        toast.success(t("itemAddedToCart"))
     }


  return (
    <div className={styles.product}>
        <img src={product.image} alt="" />
        <div className={styles.name}> {product.name} </div>
        <div> {(product.price).toFixed(2)} €</div>
            <Button variant="contained" onClick={() => addCart(product)}>{t("addCart")}</Button>
            <Link to={"/product/" + product.id}>
            <Button>{t("lookCloser")} </Button>
            </Link>
        <div>
        </div>
    </div>
  
  
  )
}

export default Product