import React,{useContext} from 'react'
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'
const CardDropdown = ({toggle}) => {
  // console.log(toggle)
  const {cartItems} = useContext(CartContext);
  const onClickHandler=()=>{
    
    toggle();
  } 
  
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">
            {cartItems && cartItems.length!==0 && cartItems.map(item=><CartItem cartItem={item}/>)}
        </div>
        <Button buttonDesign="inverted" onClickFn ={onClickHandler} buttonType="submit">CHECKOUT</Button>
    </div>
  )
}

export default CardDropdown