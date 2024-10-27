"use client";

import { create } from "zustand";
import { useProduct } from "./ContextProvider";

// Define the Zustand store
const useProductStore = create((set, get) => ({
  product: [],

  // Function to add products to the cart
  addProduct: (id) => {
    const { product } = get();
    const allProducts = useProduct(); // Get products directly here

    const neededProduct = allProducts.find((item) => item.id == id);

    if (!neededProduct) {
      return;
    }

    // If product already exists, increase the quantity.
    if (product.find((item) => item.id === neededProduct.id)) {
      set((state) => ({
        product: state.product.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      }));
    } else {
      set((state) => ({
        product: [...state.product, { ...neededProduct, quantity: 1 }],
      }));
    }
  },

  // Function to remove a product from cart
  removeProduct: (id) => {
    const { product } = get();
    const target = product.find((item) => item.id == id);

    // If target is not in the product[]
    if (!target) {
      return;
    }

    if (target.quantity === 1) {
      set((state) => ({
        product: state.product.filter((item) => item.id != target.id),
      }));
    } else {
      set((state) => ({
        product: state.product.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      }));
    }
  },

  // Placeholder functions
  countProduct: (id) => {
  },

  countTotal: () => {

  },
}));

// Custom hook to access the store
export const useProductAtCheckout = () => useProductStore();
