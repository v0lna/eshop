import React from "react";
import {connect} from "react-redux";

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CartIcon = ({toggleDropdown, itemCount}) => {
  console.log(itemCount);
  return (
    <div className="cart-icon" onClick={toggleDropdown}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{itemCount}</span>
    </div>
  )
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);