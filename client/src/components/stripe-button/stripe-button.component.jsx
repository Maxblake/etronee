import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../assets/logo.svg';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = Math.round(price * 100);
  const publishableKey = 'pk_test_UEmjqU07i93vwiFrLnWpbf3b00ItOMJ9xm';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => console.log('Payment successful'))
      .catch(error => {
        console.log('Payment error: ', error);
      });
  };

  return (
    <StripeCheckout
      className='stripe-checkout-button'
      label='Checkout My Cart'
      name='Etronee'
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Checkout'
      token={onToken}
      stripeKey={publishableKey}
      allowRememberMe
      alipay
      bitcoin
    />
  );
};

export default StripeCheckoutButton;
