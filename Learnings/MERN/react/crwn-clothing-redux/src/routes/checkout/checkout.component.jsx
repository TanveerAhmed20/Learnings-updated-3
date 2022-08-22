import React, { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
const Checkout = () => {
  const { cartTotal,cartItems, addItemToCart, decrementFromCart ,clearItemFromCart} =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>price</span>
        </div>
        <div className="header-block">
          <span >Remove</span>
        </div>
      </div>
      {cartItems.length == 0 ? (
        <h1>Cart Empty</h1>
      ) : (cartItems.map((item, idx) =><CheckoutItem key = {idx} item={item}/>)
      )}
      <span className="total">Total: {cartTotal}</span>
    </div>
  );
};

export default Checkout;
