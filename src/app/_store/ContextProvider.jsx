"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { configDotenv } from "dotenv";

configDotenv();

// Creating a Context with initial state
const ProductContext = createContext(null);

// API keys
const KEY = process.env.NEXT_PUBLIC_KEY;
const SECRET = process.env.NEXT_PUBLIC_SECRETS;
const apiURL = process.env.NEXT_PUBLIC_URL;

const fetchData = async (req) => {
  console.log(`KEY | SECRET | URL === ${KEY} | ${SECRET} | ${apiURL}`);

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
  const [cart, setCart] = useState([]);
  const [isFav, setIsFav] = useState([]);

  // Initialize cart and isFav from localStorage after component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    const storedFav = localStorage.getItem('isFav');

    if (storedCart) setCart(JSON.parse(storedCart));
    if (storedFav) setIsFav(JSON.parse(storedFav));
  }, []);

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
    } else {
      localStorage.removeItem('cart'); // Clear localStorage when cart is empty
    }
  }, [cart]);

  // Save isFav to localStorage whenever it changes
  useEffect(() => {
    if (isFav.length > 0) {
      localStorage.setItem('isFav', JSON.stringify(isFav));
    } else {
      localStorage.removeItem('isFav'); // Clear localStorage when isFav is empty
    }
  }, [isFav]);

  const addProduct = (id, count) => {
    const target = products.find((item) => item.id === id);
    if (!target) {
      return;
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
    if (!target) return false;

    const existingProduct = isFav.find((item) => item.id === id);
    let isFavourite;

    if (existingProduct) {
      console.log("Removing from favorites");
      isFavourite = false;
      setIsFav((prev) => prev.filter((item) => item.id !== id));
    } else {
      console.log("Adding to favorites");
      isFavourite = true;
      setIsFav((prev) => [...prev, { ...target, isFav: true }]);
    }

    console.log("Is Fav?: ", isFavourite);
    return isFavourite;
  };

  const listFav = () => {
    return isFav;
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
