import { Link, Outlet} from "react-router-dom";
import React,{useContext,useState} from "react";
import { ReactComponent as Crwn } from "../../assets/crown.svg";
// import {Fragment} from 'react'  this also works
// import './navigation.styles.jsx'
import {UserContext} from '../../contexts/user.context'
import {signOutUser} from '../../utils/firebase/firebase.utils.js'
import CardIcon from '../../components/cart-icon/cart-icon.component'
import CardDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {LogoContainer, NavigationContainer, NavLinks,NavLink} from './navigation.styles.jsx'
export default function Navigation() {
  const [toggle,setToggle] = useState(false);
  const toggleChange = ()=>{
      setToggle(!toggle);
      console.log('toggle changed')
  }
  // console.log("LOCATION:"+window.location)
  const {currentUser,setCurrentUser} = useContext(UserContext);
  const onClickHandler = async ()=>{
  await signOutUser();
  console.log('successfully logged out');
  setCurrentUser(null);
  }
  return (
    <React.Fragment>
      <NavigationContainer>
        
          <LogoContainer to="/">
            <Crwn className="logo" />
          </LogoContainer>
     
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {
            currentUser?<NavLink as= "span" onClick={onClickHandler}>SIGN-OUT</NavLink>:(
           <NavLink to="auth">
            SIGN-IN
          </NavLink> )
          }
          <CardIcon toggle = {toggleChange}/>
        </NavLinks>
        {toggle  && <CardDropdown toggle = {toggleChange}/>}
      </NavigationContainer>
      <Outlet/>
    </React.Fragment>
  );
}
