import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_QdwbCwJOzw56vSwuGFOi100W00DIj30Q9P'
const onToken = token =>{
    console.log(token);
    alert('Payment Succesful')
}

    return(
        <StripeCheckout 
            lable = 'Pay Now'
            name='KingClothing co.Ltd'
            billingAddress
            shippingAddress
            image="https://www.mykingandbay.com/images/1173/new/css/king-and-bay-logo-icon.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;