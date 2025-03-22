import axios from 'axios';
import { configDotenv } from 'dotenv';

configDotenv();
// API keys
const KEY = process.env.NEXT_PUBLIC_KEY;
const SECRET = process.env.NEXT_PUBLIC_SECRETS;
const apiURL = process.env.NEXT_PUBLIC_URL;

export const fetchData = async ( req ) => {
    // console.log(`${apiURL}wc/v3/${req}?consumer_key=${KEY}&consumer_secret=${SECRET}`)
    try {
        const res = await axios.get(`${apiURL}wc/v3/${req}`, {
            params: { consumer_key: KEY,
                consumer_secret: SECRET,
            }
        });
        const data = res.data;
        if( data.length <= 0 ){
            throw new Error("Product doesn't exist");
        }

        return data;

    } catch (error) {
        console.error(error.response?.message || error.message || "Unexpected error occurred");
        return null;
    }
};

export const fetchDataBySlug = async( req , reqSlug ) => {
    try {
        const res = await axios.get(`${apiURL}wc/v3/${req}`, {
            params: { consumer_key: KEY,
                consumer_secret: SECRET,
                slug: reqSlug ? reqSlug : ""
            }
        });
        const data = res.data;
        if( data.length <= 0 ){
            throw new Error("Product doesn't exist");
        }

        return data[0];

    } catch (error) {
        console.error(error.response?.message || error.message || "Unexpected error occurred");
        return null;
    }
}

export const fetchProductByCategory = async( slug ) => {
    try {
        const res = await fetchData("products");
        if( !res || res === null ){
            throw new Error("Unable to fetch products");
        }
        if( slug === "all" ){
            return res;
        }
        // filter data to only contain data of current category
        const targetData = res.filter( item => item.categories?.some( item => item?.slug === slug )  );        
        return targetData;

    } catch (error) {
        console.error(error);
        return null;
    }
}