import React from "react";

import {connect} from "react-redux";

import {addItem} from "../../redux/cart/cart.actions";

import {
  AddButton,
  CollectionImage,
  CollectionItemContainer,
  CollectionItemFooter,
  CollectionItemName, CollectionItemPrice
} from "./collection-item.styles";

const CollectionItem = ({item, addItemToCart}) => {
  const {name, imageUrl, price} = item;

  return (
    <CollectionItemContainer>
      <CollectionImage imageUrl={imageUrl}/>
      <CollectionItemFooter>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>{price}</CollectionItemPrice>
      </CollectionItemFooter>
      <AddButton inverted onClick={() => addItemToCart(item)}>Add to cart</AddButton>
    </CollectionItemContainer>
  )
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);