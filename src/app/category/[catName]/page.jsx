import Head from "next/head";
import Header from "../../_components/Header";
import CatSubNav from "../../_components/CatSubNav";
import Categories from "../Categories";

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
      </section>
    </>
  );
}


