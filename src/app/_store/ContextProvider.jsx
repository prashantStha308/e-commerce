"use client";
import { createContext, useContext, useState } from "react";

// Creating a Context. The initial value is an empty array
export const ProductContext = createContext([]);

// Context Provider Component
export const ProductContextProvider = ({ children, value }) => {

  const [products] = useState(value);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use ProductContext
export const useProduct = () => useContext(ProductContext);
