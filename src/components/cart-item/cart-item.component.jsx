import React from "react";

import {
  CartIconName,
  CartItemContainer,
  CartItemImage,
  ItemDetails,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetails>
        <CartIconName>{name}</CartIconName>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
