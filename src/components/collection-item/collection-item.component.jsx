import React from "react";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import {addItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CollectionItem = ({item, addItemToCart}) => {
  const {name, imageUrl, price} = item;
  const imageStyle = {backgroundImage: `url(${imageUrl})`};
  return (
    <div className="collection-item">
      <div className="image" style={imageStyle}/>
      <footer className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </footer>
      <CustomButton inverted onClick={() => addItemToCart(item)}>Add to cart</CustomButton>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);