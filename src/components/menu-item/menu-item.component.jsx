import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({title, imageUrl, size}) => {

  const styles = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div style={styles} className={`${size} menu-item`}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
};

export default MenuItem;