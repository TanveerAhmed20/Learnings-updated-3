import React from 'react'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss'
const CardIcon = ({toggle}) => {
  return (
    <div onClick={toggle} className='cart-icon-container'>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span> 
        {/* holds the count  */}
    </div>
  )
}

export default CardIcon