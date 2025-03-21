import axios from 'axios';
import { configDotenv } from 'dotenv';
import { create } from 'zustand';
import { persist } from 'zustand/middleware'; 

configDotenv();
// API keys
const KEY = process.env.NEXT_PUBLIC_KEY;
const SECRET = process.env.NEXT_PUBLIC_SECRETS;
const apiURL = process.env.NEXT_PUBLIC_URL;


export const fetchData = async (req) => {
    try {
        const res = await axios.get(`${apiURL}wc/v3/${req}`, {
            params: { consumer_key: KEY, consumer_secret: SECRET }
        });
        return res.data;
    } catch (error) {
        console.error(error.response?.message || error.message || "Unexpected error occurred");
        return [];
    }
};

const ProductStore = create(persist(
    (set) =>({
        cart:[],
        setCart: ( cart ) => set({cart}),
    
        addToCart: ( product , count )=>{
            set(state => {
                const existingItemIndex = state.cart.findIndex(item => item.id === product.id);
                
                if (existingItemIndex >= 0) {
                    // Item exists in the cart, update its amount
                    const updatedCart = [...state.cart];
                    updatedCart[existingItemIndex].amount = count;
                    localStorage.setItem( 'cart' , updatedCart );
                    return { cart: updatedCart };
                } else {
                    const updatedCart = [...state.cart, { ...product, amount: count }];
                    localStorage.setItem( 'cart' , JSON.stringify(updatedCart) );
                    return { cart: [...state.cart, updatedCart] };
                }
            });
        },
        removeItem: () =>{
            console.log("bla bla")
        },
    
        getCartItem: ( pid )=>{
            const state = ProductStore.getState();
            const targetCart = state.cart.find( item => item.id === pid );
            return targetCart ? targetCart.amount : 0 ;
        }
    })
),
    {
        name: 'cart',
        getStorage: ()=> localStorage
    }
)

export const useProductStore = ()=> ProductStore();