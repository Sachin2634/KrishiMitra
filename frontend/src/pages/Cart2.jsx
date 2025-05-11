import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { loadStripe } from '@stripe/stripe-js';

// Load your publishable key from Stripe
const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

const Cart2 = () => {
  const { cartItems2, removeFromCart2, clearCart2, totalPrice2 } = useContext(CartContext);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch('http://localhost:5000/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems2 }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="min-h-screen w-full px-4 py-10">
      <h2 className="text-center mb-6 text-3xl font-semibold">My Cart 2</h2>
      {cartItems2.length > 0 ? (
        <div className="space-y-4">
          {cartItems2.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded shadow-md">
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button
                onClick={() => removeFromCart2(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 text-lg font-semibold">Total: ${totalPrice2().toFixed(2)}</div>
          <button
            onClick={handleCheckout}
            className="mt-4 bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded mr-[30px]"
          >
            Checkout
          </button>
          <button
            onClick={clearCart2}
            className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white px-6 py-2 rounded"
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <p className="text-center text-lg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart2;