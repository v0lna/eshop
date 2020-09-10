import React from "react";
import {Link} from "react-router-dom";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";
import "./header.styles.scss"
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, isDropdownHidden}) => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {
          currentUser
            ? <div className="option" onClick={() => auth.signOut()}>Sign out</div>
            : <Link className="option" to={"/signin"}>Sign in</Link>
        }
        <CartIcon/>
      </div>
      {!isDropdownHidden && <CartDropdown/>}
    </header>
  )
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  isDropdownHidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);