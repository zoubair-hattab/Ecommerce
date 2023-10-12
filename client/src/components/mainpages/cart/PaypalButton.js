// .js
import { PayPalButtons } from '@paypal/react-paypal-js';
import React, { useState } from 'react';
const PaypalButton = (props) => {
  const [paidFor, setPaidFor] = useState(false);
  const { total } = props;

  return (
    total && (
      <PayPalButtons
        style={{
          color: 'silver',
          layout: 'horizontal',
          height: 48,
          tagline: false,
          shape: 'pill',
        }}
        createOrder={(data, actions) => {
          console.log(total);
          return actions.order.create({
            purchase_units: [
              {
                description: 'payment',
                amount: {
                  value: total,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          props.tranSuccess(order);
        }}
        nError={(err) => {
          console.error('PayPal Checkout onError', err);
        }}
      />
    )
  );
};
export default PaypalButton;
