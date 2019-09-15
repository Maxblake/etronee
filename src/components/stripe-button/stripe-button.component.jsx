import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../assets/logo.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_UEmjqU07i93vwiFrLnWpbf3b00ItOMJ9xm';

  const onToken = () => {
    alert('Payment Successful');
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
