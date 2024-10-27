"use client";

import { create } from "zustand";

// Define the Zustand store
// The alteration in the objects only take effect in the product[] array.


const useProductStore = create((set, get) => ({
  product: [],

  // Function to add products to the cart
  addProduct: (id, allProducts) => {
    const { product } = get();

    const target = allProducts.find((item) => item.id == id);

    if (!target) {
      return;
    }

    // If product already exists, increase the userQuantity.
    if (product.find((item) => item.id === target.id)) {
      set((state) => ({
        product: state.product.map((item) =>
          item.id === id ? { ...item, userQuantity: item.userQuantity + 1 } : item
        ),
      }));
    } else {
      // Set initial userQuantity to 1 when adding a new product
      set((state) => ({
        product: [...state.product, { ...target, userQuantity: 1 }],
      }));
      
    }

    console.log("Target:", product[ product.length - 1 ]);
  },

  // Function to remove a product from cart
  removeProduct: (id) => {
    const { product } = get();
    const target = product.find((item) => item.id == id);

    // If target is not in the product[]
    if (!target) {
      return;
    }

    if (target.userQuantity === 1) {
      set((state) => ({
        product: state.product.filter((item) => item.id != target.id),
      }));
    } else {
      set((state) => ({
        product: state.product.map((item) =>
          item.id === id ? { ...item, userQuantity: item.userQuantity - 1 } : item
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
