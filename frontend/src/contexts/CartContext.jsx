import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    alert('Added to Cart')
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const [cartItems2, setCartItems2] = useState([]);

  const addToCart2 = (product) => {
  console.log('Adding product:', product);
  setCartItems2(prevItems => {
    const existingProduct = prevItems.find(item => item.id === product.id);
    if (existingProduct) {
      console.log(`Incrementing quantity for ${product.name}`);
      return prevItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      console.log(`Adding new product ${product.name}`);
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });
};

  const removeFromCart2 = (id) => {
    setCartItems2(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart2 = () => {
    setCartItems2([]);
  };

  const totalPrice2 = () => {
    return cartItems2.reduce((total, item) => total + item.price * item.quantity, 0);
  };





  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartItems2,
      addToCart2,
      removeFromCart2,
      clearCart2,
      totalPrice2,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};