import React,{useContext} from 'react'
import { CartContext } from "../../contexts/cart.context";
import './checkout-item.styles.scss'
const CheckoutItem = ({item}) => { 
    const { cartItems, addItemToCart, decrementFromCart } =
    useContext(CartContext);
    const{imageUrl,price,name,quantity} = item;
    console.log("item"+item)
  return (
      <div className="checkout-item-container">
        <div className="image-container">
            <img src={imageUrl} alt={name}></img>
        </div> 
        <span>{name}</span>
        <span>{quantity}</span>
        <span>{price}</span>
        <div className="remove-button">&#10005;</div>
      </div>
    );
}

export default CheckoutItem