import React from "react";

import { connect } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cart/cart.actions";

import {
  Arrow,
  CheckoutItemContainer,
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItemQuantity,
  ImageContainer,
  QuantityValue,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>{price}</CheckoutItemPrice>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
