import Header from "@/app/_components/Header";
import CatSubNav from "@/app/_components/CatSubNav";
import Footer from "@/app/_components/Footer";
import Categories from "@/app/category/Categories";

// metaData of this page
export const metadata = {
  title: "NovaNest | Category",
  description: "An e-commerce website. First project using Next.js",
  openGraph: {
    title: "NovaNest | Category",
    description: "An e-commerce website. First project using Next.js",
    image: "https://e-commerce-zeta-tawny.vercel.app/ogLogo.png", 
    type: "website",
  },
  twitter: {
    card: "summary_large_image", 
    title: "NovaNest | Category",
    description: "An e-commerce website. First project using Next.js",
    image: "https://e-commerce-zeta-tawny.vercel.app/ogLogo.png", 
  }
};


export default function CategoryAll() {


  return (
    <>
      <section id="category">
        <Header currentPage="category" />
        <CatSubNav currentPage="all" />

        <div className="bg-white dark:bg-black mb-4">
          <Categories targetCat={'beauty'} />
          <Categories targetCat={'art'} />
          <Categories targetCat={'others'} />
        </div>

        <Footer />
      </section>
    </>
  );
}


