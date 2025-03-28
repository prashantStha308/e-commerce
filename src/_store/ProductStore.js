import axios from 'axios';
import { configDotenv } from 'dotenv';
import { create } from 'zustand';
import { persist } from 'zustand/middleware'; 

configDotenv();
// API keys
const KEY = process.env.NEXT_PUBLIC_KEY;
const SECRET = process.env.NEXT_PUBLIC_SECRETS;
const apiURL = process.env.NEXT_PUBLIC_URL;

const ProductStore = create(persist(
    (set) =>({
        cart:[],
        setCart: ( cart ) => set({cart}),
    
        addToCart: ( product , count )=>{

            let targetIndex;
            let updatedCart;

            set(state => {
                targetIndex = state.cart.findIndex(item => item.id === product.id);
            
                if (targetIndex >= 0) {
                    // update existing cart item
                    updatedCart = [...state.cart];
                    updatedCart[targetIndex].amount = count;
                    return { cart: updatedCart };
                } else {
                    // add cart item
                    updatedCart = [...state.cart, { ...product, amount: count }];
                    return { cart: updatedCart }; 
                }
            });

            if( targetIndex >= 0 && updatedCart[targetIndex].amount <= 0 ){
                const state = ProductStore.getState();
                console.log("calling removeIem from addToCart function:", state.cart[0]);
                state.removeItem( updatedCart[targetIndex].id );
            }

        },
        removeItem: (targetId) =>{
            const state = ProductStore.getState();
            console.log("calling removeItem:", state.cart[0]);
            set(state => ({ cart: state.cart.filter(item => item.id !== targetId) }));
        },
    
        getCartItem: ( pid )=>{
            const state = ProductStore.getState();
            const targetCart = state.cart.find( item => item.id === pid );
            return targetCart ? targetCart.amount : 0 ;
        },

        getProductTotalCost: (pid) => {
            const { cart } = ProductStore.getState();
            const targetCart = cart.find(item => item.id === pid);
            if (targetCart) {
                const price = parseFloat(targetCart.price);
                return targetCart.amount * price;
            }
            return 0;
        },
        
        getTotalCost: () => {
            const { cart } = ProductStore.getState();
            return cart.reduce((total, item) => {
                const price = parseFloat(item.price);
                return total + (item.amount * price);
            }, 0);
        },
    })
),
    {
        name: 'cart',
        getStorage: ()=> localStorage
    }
)

export const useProductStore = ()=> ProductStore();