import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryStore from "../_store/QueryConfig";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";

export const metadata = {
  title: "The Next Shop|Home"
}

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryStore>
          <main className="min-h-screen w-screen grid content-between" >
            <Header />
              {children}
            <Footer />
          </main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryStore>
      </body>
    </html>
  );
}
