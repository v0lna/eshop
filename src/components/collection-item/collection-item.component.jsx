import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({name, imageUrl, price }) => {
  const imageStyle = {backgroundImage: `url(${imageUrl})`};
  return (
    <div className="collection-item">
      <div className="image" style={imageStyle}/>
      <footer className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </footer>
    </div>
  )
};

export default CollectionItem;