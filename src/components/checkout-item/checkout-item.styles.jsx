import styled, {css} from "styled-components";

const widthSetter = css`
    width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
    padding-right: 15px;
    img {
      width: 100%;
      height: 100%;
    }
`;

export const CheckoutItemName = styled.span`
  ${widthSetter}
`;

export const CheckoutItemQuantity = styled.span`
  ${widthSetter}
   display: flex;
   
   span {
    margin: 0 10px;
  }
  
  div {
    cursor: pointer;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

export const CheckoutItemPrice = styled.span`
  ${widthSetter}
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;