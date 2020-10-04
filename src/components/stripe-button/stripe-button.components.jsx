import React from "react";
import StripeCheckout from "react-stripe-checkout";

const PUBLIC_KEY = "pk_test_51HYDHDBiNCCZs5hXQiNsEWzAh14RAzhwehxReFtC9XTf49iUxXoUPpShLMG1QgEGBq5p6skT7fyNAkkupniu672900BHLDrI6h";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful")
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={PUBLIC_KEY}
      label={"Pay now"}
      panelLabel={"Pay now"}
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price $${price}`}
      amount={priceForStripe}
      name={"CRWN study project"}
    />
  )
};

export default StripeCheckoutButton;