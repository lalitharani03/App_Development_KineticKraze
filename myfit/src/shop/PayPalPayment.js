import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalPayment = ({ totalPrice, onError, onCancel, onSuccess }) => {
  const conversionRate = 0.011916;
  const handleScriptLoadError = (err) => {
    console.error('PayPal Script Load Error:', err);
  };

  return (
    <PayPalScriptProvider
      options={{ "client-id": "AUlkSKqg7xHWZ2JPchtJMzDpjdt9yCdz0V3TkwZz1wMX6E9mdT41BBZkzvW8Cs2jJ4firNffOBz8MdVF" }}
      onError={handleScriptLoadError}
    >
      <PayPalButtons
        style={{ layout: 'vertical' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: (totalPrice * conversionRate).toFixed(2),
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          try {
            const details = await actions.order.capture();
            onSuccess(details);
          } catch (err) {
            console.error('Order Capture Error:', err);
            onError(err);
          }
        }}
        onError={(err) => {
          console.error('PayPal Buttons Error:', err);
          onError(err);
        }}
        onCancel={() => {
          console.log('Transaction cancelled');
          onCancel();
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;