import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const public_key = "pk_test_NUAz3WQqlwYZvRgx8njLklff00fe6YU3Ae";

  const onToken = (token) => {
    console.log(token);
    alert("Successfull");
  };

  return (
    <StripeCheckout
      label="Thanh toán ngay"
      name="Midway travel"
      shippingAddress
      billingAddress
      description={`Your total is ${price.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      })}`}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={public_key}
      currency="VND"
    />
  );
};

export default StripeButton;
