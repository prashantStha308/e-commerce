"use client";
import { create } from "zustand";


const useProductStore = create((set, get) => ({
  product: [],

  // Function to add products to the cart
  addProduct: ( id , allProducts , count ) => {

    const { product } = get();

    const target = allProducts.find((item) => item.id == id);

    if (!target) {
      return;
    }

    // If product already exists, just update the quamtity
    if (product.find((item) => item.id === target.id)) {
      set((state) => ({
        product: state.product.map((item) =>
          item.id === id ? { ...item, userQuantity: count } : item
        ),
      }));
      // add a new product to product[] 
    } else {
      set((state) => ({
        product: [...state.product, { ...target, userQuantity: count }],
      }));
    }
  },

  // Function to remove a product from cart
  removeProduct: ( id ) => {
    const { product } = get();
    const target = product.find((item) => item.id == id);

    // If target is not in the product[]
    if (!target) {
      return;
    }


    // filter the target.id out from product[]
      set((state) => ({
        product: state.product.filter((item) => item.id != target.id),
      }));

  },


  productTotal: (id) => {
    const { product } = get();
    const target = product.find( item=>( product.id === id ) )

    const total = target.userQuantity * target.price;
    
    return total;

  },

  completeTotal: () => {
    const { product } = get();
    let sum = 0;
    product.forEach( item =>( sum+= item.price * item.userQuantity ) )

    return sum;
  },
}));


export const useProductAtCheckout = () => useProductStore();
