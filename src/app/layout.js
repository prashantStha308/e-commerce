import { sort } from "./_functions/prodFunctions";
import { ProductContextProvider } from "./_store/ContextProvider";
import "./globals.css";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// Page's Meta Data
export const metadata = {
  title: "NovaNest | Home",
  description: "An e-commerce website. First project using Next.js",
  openGraph: {
    title: "NovaNest | Home",
    description: "An e-commerce website. First project using Next.js",
    image: "https://e-commerce-zeta-tawny.vercel.app/ogLogo.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", 
    title: "NovaNest | Home",
    description: "An e-commerce website. First project using Next.js",
    image: "https://e-commerce-zeta-tawny.vercel.app/ogLogo.png",
  }
};

// const KEY = process.env.NEXT_PUBLIC_KEY;
// const SECRET = process.env.NEXT_PUBLIC_SECRETS;
// const apiURL = "https://rojantamrakar.com.np/wp-json/wc/v3/"

// const woocommerce = new WooCommerceRestApi({
//   url: apiURL,
//   consumerKey: KEY,
//   consumerSecret: SECRET
// })

// // Function to get products
// export const fetchProducts = async () => {
//   try {
//     const res = await woocommerce.get('products');
//     if( res.status === 200 ){
//       console.log( "Success Connect" );
//       return response.data;
//     }else{
//       console.log( "Failed Fetch. Status: ", res.status )
//       return [];
//     }

//   } catch (error) {
//     console.error('Error fetching products:', error.res.data);
//   }
// };



// Array of product objects
const productArr = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    category: "beauty",
    price: 9.99,
    rating: 4.94,
    stock: 0,
    brand: "Essence",
    userQuantity: 0,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    category: "beauty",
    price: 19.99,
    rating: 3.28,
    stock: 44,
    brand: "Glamour Beauty",
    userQuantity: 0,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 3,
    title: "Powder Canister",
    category: "beauty",
    price: 14.99,
    rating: 3.82,
    stock: 59,
    brand: "Velvet Touch",
    userQuantity: 0,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
  },
  {
    id: 4,
    title: "Red Lipstick",
    category: "beauty",
    price: 12.99,
    rating: 2.51,
    stock: 68,
    brand: "Chic Cosmetics",
    userQuantity: 0,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
  },
  {
    id: 5,
    title: "Red Nail Polish",
    category: "beauty",
    price: 8.99,
    rating: 3.91,
    stock: 71,
    brand: "Nail Couture",
    userQuantity: 0,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    category: "fragrances",
    price: 49.99,
    rating: 4.85,
    stock: 17,
    brand: "Calvin Klein",
    userQuantity: 0,
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png"
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
  },
];

export const products = sort(productArr); // Sort the fetched products

// RootLayout component
export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <ProductContextProvider value={products}>
          {children}
        </ProductContextProvider>
      </body>
    </html>
  );
}

