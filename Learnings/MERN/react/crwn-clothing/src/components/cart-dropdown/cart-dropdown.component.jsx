import React from 'react'
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
const CardDropdown = ({toggle}) => {
  // console.log(toggle)
  const onClickHandler=()=>{
    
    toggle();
  } 
  
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">

        </div>
        <Button buttonDesign="inverted" onClickFn ={onClickHandler} buttonType="submit">CHECKOUT</Button>
    </div>
  )
}

export default CardDropdown