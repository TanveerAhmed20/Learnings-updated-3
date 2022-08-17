import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";
const CheckoutItem = ({ item }) => {
  const { cartItems, addItemToCart, decrementFromCart, clearItemFromCart } =
    useContext(CartContext);
  const { imageUrl, price, name, quantity } = item;
  console.log("item" + item);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick = {()=>decrementFromCart(item)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick = {()=>addItemToCart(item)}>&#10095;</div>
      </span>
      <span  className="price">{price}</span>
      <div onClick={() => clearItemFromCart(item)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
