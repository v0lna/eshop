import React from "react";
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

import {CartIconContainer, ItemCount, ShoppingIconContainer} from "./cart-icon.styles";

const CartIcon = ({toggleDropdown, itemCount}) => {
  return (
    <CartIconContainer onClick={toggleDropdown}>
      <ShoppingIconContainer/>
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);