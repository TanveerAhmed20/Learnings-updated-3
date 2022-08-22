import React ,{useContext}from 'react'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss'
import { CartContext } from '../../contexts/cart.context';
const CardIcon = ({toggle}) => {
  const {totalItems} = useContext(CartContext);
  return (
    <div onClick={toggle} className='cart-icon-container'>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{totalItems}</span> 
        {/* holds the count  */}
    </div>
  )
}

export default CardIcon