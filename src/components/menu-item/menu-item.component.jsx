import React from "react";

import "./menu-item.styles.scss";
import {withRouter} from "react-router-dom";

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => {

  const styles = {
    backgroundImage: `url(${imageUrl})`
  };

  const goByClick = () => {
    history.push(`${match.url}${linkUrl}`)
  };
  // console.log({history, match})
  return (
    <div className={`${size} menu-item`} onClick={goByClick}>
      <div style={styles} className="background-image"/>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
};

export default withRouter(MenuItem);