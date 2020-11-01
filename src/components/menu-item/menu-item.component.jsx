import React from "react";

import { withRouter } from "react-router-dom";

import {
  BackgroundImageContainer,
  MenuItemContainer,
  MenuItemContent,
  SubtitleContainer,
  TitleContainer,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  const goByClick = () => {
    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <MenuItemContainer size={size} onClick={goByClick}>
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <MenuItemContent className="content">
        <TitleContainer>{title}</TitleContainer>
        <SubtitleContainer>SHOP NOW</SubtitleContainer>
      </MenuItemContent>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
