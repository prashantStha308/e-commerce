"use client";
import { createContext, useContext, useEffect, useState } from "react";


const ProductContext = createContext(null);

// Context Provider Component
export const ProductContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [visitedPages, setVisitedPages] = useState([]);

  // Initialize cart from localStorage after component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);


  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart'); // Clear localStorage when cart is empty
    }
  }, [cart]);


  const addProduct = (target, count) => {
    if (!target) {
      return;
    }
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === target.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === target.id ? { ...item, userQuantity: count } : item
        );
      } else {
        return [...prev, { ...target, userQuantity: count }];
      }
    });
  };

  const removeProduct = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const productTotal = (id) => {
    const target = cart.find((item) => item.id === id);
    return target ? target.userQuantity * target.price : 0;
  };

  const completeTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.userQuantity, 0);
  };


  return (
    <ProductContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        productTotal,
        completeTotal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use ProductContext
export const useProduct = () => useContext(ProductContext);
