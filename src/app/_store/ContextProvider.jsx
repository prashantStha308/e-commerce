"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { configDotenv } from "dotenv";

configDotenv();

// Creating a Context with initial state
const ProductContext = createContext(null);

// API keys
const KEY = process.env.KEY;
const SECRET = process.env.SECRETS;
const apiURL = process.env.URL;

const fetchData = async (req) => {
  try {
    const res = await axios.get(`${apiURL}${req}?consumer_key=${KEY}&consumer_secret=${SECRET}`);
    if (res.status === 200) {
      return res.data;
    } else {
      console.error("Fetch failed with status:", res.status);
      return [];
    }
  } catch (error) {
    console.error("Fetch Failed.", error);
    return [];
  }
};

// Context Provider Component
export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState(() => {
    // Initialize from localStorage if available
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  
  const [isFav, setIsFav] = useState(() => {
    // Initialize from localStorage if available
    const storedFav = localStorage.getItem('isFav');
    return storedFav ? JSON.parse(storedFav) : [];
  });

  // Load data 
  useEffect(() => {
    const loadData = async () => {
      const prod = await fetchData("products");
      const cat = await fetchData("products/categories");
      setProducts(prod);
      setCategories(cat);
    };
    loadData();
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Save isFav to localStorage whenever it changes
  useEffect(() => {
    if (isFav.length > 0) {
      localStorage.setItem('isFav', JSON.stringify(isFav));
    }
  }, [isFav]);

  const addProduct = (id, count) => {
    const target = products.find((item) => item.id === id);
    if (!target) {
        return; // Return if target is not found
    }
    setCart((prev) => {
        const existingProduct = prev.find((item) => item.id === target.id);

        if (existingProduct) {
            return prev.map((item) =>
                item.id === id ? { ...item, userQuantity: count } : item
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

  const setFav = (id) => {
    const target = products.find((item) => item.id === id);
    if (!target) return false; // Return false if the product is not found

    const existingProduct = isFav.find((item) => item.id === id);
    let isFavourite;

    if (existingProduct) {
        console.log("Removing from favorites");
        isFavourite = false;
        setIsFav((prev) => prev.filter((item) => item.id !== id)); // Remove from favorites
    } else {
        console.log("Adding to favorites");
        isFavourite = true;
        setIsFav((prev) => [...prev, { ...target, isFav: true }]); // Add to favorites
    }

    console.log("Is Fav?: ", isFavourite);
    return isFavourite; // Return the boolean value
};


  const listFav = () => {
    return isFav; // Return the favorite items
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        cart,
        addProduct,
        removeProduct,
        productTotal,
        completeTotal,
        setFav,
        listFav,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use ProductContext
export const useProduct = () => useContext(ProductContext);
