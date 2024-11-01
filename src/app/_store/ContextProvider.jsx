// Context Provider
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { configDotenv } from "dotenv";

configDotenv();

// Full url should look like:
// https://rojantamrakar.com.np/wp-json/wc/v3/products?consumer_key=ck_XXXX&consumer_secret=cs_XXXXXXXX
// structure= {link}/{endpoint}?{ck}&{cs}


// Creating a Context. The initial value is an empty array
export const ProductContext = createContext([]);

// Api keys
const KEY = process.env.NEXT_PUBLIC_KEY;
const SECRET = process.env.NEXT_PUBLIC_SECRETS;
const apiURL = process.env.NEXT_PUBLIC_URL;

const fetchData = async ( req )=>{

  console.log(`URL: ${apiURL}${req}?consumer_key=${KEY}&consumer_secret=${SECRET}`);

  const res = await axios.get(`${apiURL}${req}?consumer_key=${KEY}&consumer_secret=${SECRET}`);
  try {
    if( res.status === 200 ){
      console.log("Success. Stauts: ", res.status);
      return res.data;
    }else{
      console.error( "Fetch failed with status: ", res.status );
      return;
    }
  } catch (error) {
    console.error( "Fetch Failed.",error );
  }

}

// Context Provider Component
export const ProductContextProvider = ({ children, value }) => {

  // create products state variable to access the fetched data
  const [ products , setProducts ] = useState(value);
  const [ category , setCategory ] = useState(value);

  // load data on page start/refresh
  useEffect( ()=>{
    const loadData = async ()=>{
      const prod = await fetchData("products");
      const cat = await fetchData("products/categories");

      setProducts(prod);
      setCategory(cat);
    }
    loadData();
  }, [] )

  return (
    <ProductContext.Provider value={{ products , category }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use ProductContext
export const useProduct = () => useContext(ProductContext);