import CategoryClient from "@/_client/CategoryClient";
import CatNavbar from "@/_components/CatNavbar";
import { fetchDataBySlug } from "@/_store/DataStore";
import { notFound } from "next/navigation";


export async function generateMetadata({ params }) {
  let { slug } = await params;
  try {
    if (slug.trim().length === 0) {
      slug = 'all';
    }

    const category = slug !== 'all' && await fetchDataBySlug('products/categories', slug);

    return {
      title: slug !== 'all'
        ? `${category.name} - Card Store`
        : 'Browse Categories',
      description: slug !== 'all'
        ? `Explore products in the ${category.name} category.` || category.description
        : 'Browse the categories available on Card Store.',
      openGraph: {
        title: slug !== 'all'
          ? `${category.name} - Card Store`
          : 'Browse Categories',
        description: slug !== 'all'
          ? `Explore products in the ${category.name} category.` || category.description
          : 'Browse the categories available on Card Store.',
        url: slug !== 'all' ? category.permalink : 'your-default-url', // replace with the actual URL
        siteName: 'Card Store',
        images: category.image ? category.image : '', // provide a fallback if no image
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: slug !== 'all'
          ? `${category.name} - Card Store`
          : 'Browse Categories',
        description: slug !== 'all'
          ? `Explore products in the ${category.name} category.` || category.description
          : 'Browse the categories available on Card Store.',
        images: category.image ? category.image : '',
      },
      alternates: {
        canonical: slug !== 'all' ? "put another link here": 'your-default-url', // replace with the actual URL
      },
    };
  } catch (error) {
    console.error(error);
    notFound();
  }
}

const page = async({ params }) => {
  let { slug } = await params;
  if ( slug.trim().length === 0 ) {
    slug = 'all'
  }

  return (
    <section id="category" className="min-h-full max-w-full grid content-between gap-20">
      <CatNavbar currentPage={slug} />
      <CategoryClient targetCat={slug} />
    </section>
    
  )
}

export default page