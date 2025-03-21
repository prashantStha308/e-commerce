// Product Page

import ProductClient from '@/_client/ProductClient';
import { fetchData } from '@/_store/ProductStore';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {  
    const { id } = params; 
    if (!id || id.trim().length === 0 || isNaN(Number(id))) {
        notFound();
    }
    try {
        const product = await fetchData(`products/${id}`);

        return {
            title: `${product.name} - Buy Now`,
            description: product.short_description,
            openGraph: {
                title: `${product.name} - Buy Now on The Next Shop`,
                description: product.short_description,
                images: product.images.length ? [product.images[0].src] : "",
            },
            twitter: {
                card: "summary_large_image", 
                title: `${product.name} - Buy Now on The Next Shop`,
                description: product.short_description,
                image: product.images.length ? [product.images[0].src] : "",
            }
        };
    } catch (error) {
        notFound();
    }
}


export default async function ProductPage({ params }) {
    const { id } = params; 

    if (!id || id.trim().length === 0 || isNaN(Number(id))) {
        notFound();
    }

    return <ProductClient pid={id} />;
}
