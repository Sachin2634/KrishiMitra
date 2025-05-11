import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { loadStripe } from '@stripe/stripe-js';

// Load your publishable key from Stripe
const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + Number(item.price), 0);
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch('http://localhost:5000/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="min-h-screen w-full px-4 py-10">
      <h2 className="text-center mb-6 text-3xl font-semibold">My Cart</h2>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded shadow-md">
              <span>{item.name}</span>
              <span>${Number(item.price).toFixed(2)}</span> {/* Ensure price is parsed as a number */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 text-lg font-semibold">Total: ${calculateTotalPrice().toFixed(2)}</div>
          <button
            onClick={handleCheckout}
            className="mt-4 bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded mr-[30px]"
          >
            Checkout
          </button>
          <button
            onClick={clearCart}
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

export default Cart;