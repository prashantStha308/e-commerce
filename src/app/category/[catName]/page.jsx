import Head from "next/head";
import Header from "../../_components/Header";
import CatSubNav from "../../_components/CatSubNav";
import Footer from "../../_components/Footer";
import Categories from "../Categories";

export const metadata = {
  title: "NovaNest | Catgeory",
  description: " Browse product categories ",
  openGraph: {
    title: "NovaNest | Catgeory",
    description: "Browse product categories",
    image: "https://e-commerce-zeta-tawny.vercel.app/ogLogo.png",
    image: "public/ogLogo.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Optional: Use if you want to customize Twitter Card
    title: "NovaNest | Catgeory",
    description: "Browse product categories",
    image: "https://e-commerce-zeta-tawny.vercel.app/ogLogo.png", // Twitter image URL
  }
};

export default async function Category({ params }) {

  const { catName } = await params;

  return (
    <>
      <Head>
        <title>Category</title>
        <meta
          name="description"
          content="List items by their respective category"
        />
      </Head>

      <section id="category">
        <Header currentPage="category" />
        <CatSubNav currentPage={catName} />

        <div className="bg-white dark:bg-black">
          <Categories targetCat={catName} />
        </div>

        <Footer />
      </section>
    </>
  );
}


