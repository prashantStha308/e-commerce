"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";


const productStore = create(
  // persist middleware to store data in localStorage
  persist(
    (set, get) => ({
      product: [], //product array that'll contain all the products that user "Added to cart"

      // Function to add products to the cart
      addProduct: (id, allProducts, count) => {
        // get the available products
        const { product } = get();
        // find target product
        const target = allProducts.find((item) => item.id == id);

        // if target not found, exit
        if (!target) {
          return;
        }

        // If product already exists, just update the quantity
        if (product.find((item) => item.id === target.id)) {
          set((state) => ({
            product: state.product.map((item) =>
              item.id === id ? { ...item, userQuantity: count , favourite: false } : item
            ),
          }));
        } else {
          // Add a new product to product[]
          set((state) => ({
            product: [...state.product, { ...target, userQuantity: count , favourite: false}],
          }));
        }
      },

      // Function to remove a product from cart
      removeProduct: (id) => {
        // get the available products
        const { product } = get();
        // find the target product
        const target = product.find((item) => item.id == id);

        // If target not found, exit
        if (!target) {
          return;
        }

        // Filter the target.id out from product[]
        set((state) => ({
          product: state.product.filter((item) => item.id != target.id),
        }));
      },

      productTotal: (id) => {
        // get the available products
        const { product } = get();
        const target = product.find((item) => item.id === id);

        // If target not found, exit
        if( !target ){
          return 0;
        }

        return (target.userQuantity * target.price);
      },

      completeTotal: () => {
        // get the available products
        const { product } = get();
        // initializa a variable to store total sum
        let sum = 0;
        // for each item in product[] add it's price to sum variable
        product.forEach((item) => (sum += item.price * item.userQuantity));
        return sum;
      },

      addToFav: (id)=>{
        // get the available products
        const { product } = get();
        const target = product.find((item) => item.id === id); //Find the target product

        if( !target ){ //if target doesn't exist in the card, exit
          return
        }

        // Upadte the favourite property of the target object
        set( state => ({
          product: state.product.map( item => (
            item.id === id ? { ...item, favourite: true } : item
          ) )
        }) )
      },

      listFav: ()=>{
        // get the available products
        const { product } = get();
        // filter the products that are favourite 
        const favArr = product.filter( item =>(
          item.favourite === true
        ) )
      }

    }),
    // Store the above data in localStorage
    {
      name: "product-store", 
      getStorage: () => localStorage,
    }
  )
);

export const useProductAtCheckout = () => productStore();
