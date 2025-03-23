import CategoryClient from "@/_client/CategoryClient";
import BreadCrumb from "@/_components/Breadcrumb";
import CatNavbar from "@/_components/CatNavbar";
import { fetchDataBySlug } from "@/_store/DataStore";
import { notFound } from "next/navigation";


export async function generateMetadata({ params }) {
  let { slug } = params;

  try {
    if (!slug || slug.trim().length === 0) {
      slug = 'all';
    }

    const isCategory = slug !== 'all' && slug !== 'trending';
    const category = isCategory ? await fetchDataBySlug('products/categories', slug) : null;

    const title = isCategory
      ? `${category?.name || 'Category'} - Card Store`
      : slug === "trending"
      ? "Trending Items - Card Store"
      : "Browse Categories";

    const description = isCategory
      ? category?.description || `Explore products in the ${category?.name} category.`
      : slug === 'all'
      ? "Browse all categories and find the perfect product for you."
      : "Discover trending items available now.";

    const image = category?.image || 'default-image-url'; // Fallback image
    const url = isCategory ? category?.permalink || 'fallback-url' : 'your-default-url';

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        siteName: "Card Store",
        images: image,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: image,
      },
      alternates: {
        canonical: isCategory ? url : 'your-default-url',
      },
    };
  } catch (error) {
    console.error("Metadata generation error:", error);
    notFound();
  }
}


const page = async({ params }) => {
  let { slug } = await params;
  if ( slug.trim().length === 0 ) {
    slug = 'all'
  }

  return (
    <section id="category" className="min-h-full max-w-full grid content-between">
      <CatNavbar currentPage={slug} />
      <BreadCrumb />
      <CategoryClient targetCat={slug} />
    </section>
    
  )
}

export default page