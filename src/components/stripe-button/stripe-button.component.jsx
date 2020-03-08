import React from "react";
import Swal from "sweetalert2";

import StripeCheckout from "react-stripe-checkout";
import { clearCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const StripeCheckoutButton = ({ price, paySuccess }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_QdwbCwJOzw56vSwuGFOi100W00DIj30Q9P";
  const onToken = token => {
    console.log(token);
    Swal.fire("Payment successful", "Thank You for Your Purchase", "success");
    paySuccess();
  };

  return (
    <StripeCheckout
      lable="Pay Now"
      name="KingClothing co.Ltd"
      billingAddress
      shippingAddress
      image="https://www.mykingandbay.com/images/1173/new/css/king-and-bay-logo-icon.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
const mapDispatchToProps = dispatch => ({
  paySuccess: () => dispatch(clearCart())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
