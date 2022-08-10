import { Link, Outlet} from "react-router-dom";
import React,{useContext} from "react";
import { ReactComponent as Crwn } from "../../assets/crown.svg";
// import {Fragment} from 'react'  this also works
import './navigation.styles.scss'
import {UserContext} from '../../contexts/user.context'
import {signOutUser} from '../../utils/firebase/firebase.utils.js'

export default function Navigation() {

  const {currentUser,setCurrentUser} = useContext(UserContext);
  const onClickHandler = async ()=>{
  await signOutUser();
  console.log('successfully logged out');
  setCurrentUser(null);
  }
  return (
    <React.Fragment>
      <div className="navigation">
        <div>
          <Link className="logo-container" to="/">
            <Crwn className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser?<span className="nav-link" onClick={onClickHandler}>SIGN-OUT</span>:(
           <Link className="nav-link" to="auth">
            SIGN-IN
          </Link> )
          }
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
}
