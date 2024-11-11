// useQuery Store
"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import { configDotenv } from 'dotenv';

configDotenv();
// API keys
const KEY = process.env.NEXT_PUBLIC_KEY;
const SECRET = process.env.NEXT_PUBLIC_SECRETS;
const apiURL = process.env.NEXT_PUBLIC_URL;

// wp/v2 for Posts, pages, comments, users
// wc/v3 for Products, orders, customers, coupons

// fetchData uses wc/v3
// fetchComments uses wp/v2

export const fetchData = async (req) => {
    try {
        const res = await axios.get(`${apiURL}wc/v3/${req}?consumer_key=${KEY}&consumer_secret=${SECRET}`);
        if (res.status === 200) {
        return res.data;
        } else {
        console.error("Fetch failed with status:", res.status);
        return [];
        }
    } catch (error) {
        if( error.response ){
            console.error("Fetch Failed.", error);
        }
        else if( error.request && !error.response ){
            console.error("Network Error")
        } else {
            console.error("Unexpected error:", error.message);
        }
        return [];
    }
};



const Store = ({children}) => {
    const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default Store;