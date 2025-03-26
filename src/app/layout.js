import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryStore from "../_store/QueryConfig";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";

export const metadata = {
  title: "The Next Shop|Home",
  viewport: "width=device-width, initial-scale=1",
  description: "Welcome to The Next Shop – your destination for the latest products."
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} w-full `}>
        <QueryStore>
          <main className="min-h-screen grid content-between " >
            <Header />
              <div className=" pb-48">
                {children}
              </div>
            <Footer />
          </main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryStore>
      </body>
    </html>
  );
}
