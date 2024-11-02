import { ProductContextProvider } from "./_store/ContextProvider";
import Footer from "./_components/Footer";
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
    <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <ProductContextProvider>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ProductContextProvider>
      </body>
    </html>
  );
}

