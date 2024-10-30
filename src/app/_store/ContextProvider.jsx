"use client";
import { createContext, useContext, useState } from "react";

// Creating a Context. The initial value is an empty array
export const ProductContext = createContext([]);

export const ProductContextProvider = ({ children, value }) => {
  const [products] = useState(value);

// Children prop is necessary to nest it so that all the childrens can have access to contextProvider, and the value prop is necessary to receive the product array from layout.jsx

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use ProductContext
export const useProduct = () => useContext(ProductContext);
