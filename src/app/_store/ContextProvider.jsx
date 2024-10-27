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


// Notes for future use of Context API:
// Step-1: create context using createContext(). Assign it to a variable.
// Step-2: create a ContextProvider conponent. Make sure to have 'children' and the necessary data as props. Inside, have a state variable. return the ContextProvider.Provider element that is wrapping the children element, while passing the 'value' prop with the value of the state variable.
// Step3; create a custom hook to use the context. The useContext is the inbuilt hook. Pass the createContext variable to the useContext.
// useSomething = ()=> useContext( something ).

// Alt to ContextProvider : Zustand(used in MERN project), Redux.