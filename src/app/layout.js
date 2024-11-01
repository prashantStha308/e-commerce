import { ProductContextProvider } from "./_store/ContextProvider";
import "./globals.css";

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

// RootLayout component
export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <ProductContextProvider>
          {children}
        </ProductContextProvider>
      </body>
    </html>
  );
}

