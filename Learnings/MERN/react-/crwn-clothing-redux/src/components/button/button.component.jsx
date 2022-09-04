import React from 'react'
import './button.component.style.scss'

/*
    we have three types of buttons 
    default button 
    inverted button 
    google signin style button   
*/

const BUTTON_DESIGN_CLASSES = {
     google: 'google-sign-in',
     inverted : 'inverted'
}

const Button = ({children,buttonDesign,buttonType,onClickFn}) => {
  return (
    <button onClick={onClickFn} className={`button-container ${BUTTON_DESIGN_CLASSES[buttonDesign]}`} type={buttonType}>{children}</button>
  )
}

export default Button