"use client";
import Header from "../components/Header"
import CatSubNav from "../components/CatSubNav";
import Footer from "../components/Footer";
import Beauty from "./beauty/Beauty";
import Art from "./art_craft/Art";
import Others from "./others/Others";


export default function CategoryAll() {


  return (
    <section id="category">
      <Header currentPage={'category'} />
      <CatSubNav currentPage={'all'} />

      <div className="bg-white dark:bg-black">
        
        {/* Beauty Section */}
        <Beauty />
        {/* Art Section */}
        <Art />
        {/* Others */}
        <Others />

      </div>
      <Footer />
    </section>
  )
}
