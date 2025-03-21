import SignInClient from '@/_client/SignInClient'

export const metadata = {
    title: "The Next Shop - Sign In",
    description: "Explore game cards on The Next Shop",
    openGraph: {
        title: "The Next Shop - Sign In",
        description: "Explore game cards on The Next Shop",
        images: "https://e-commerce-zeta-tawny.vercel.app/vercel.svg",
        type: "website"
    },
    twitter: {
        card: "summary_large_image", 
        title: "The Next Shop - Sign In",
        description: "Explore game cards on The Next Shop",
        images: "https://e-commerce-zeta-tawny.vercel.app/vercel.svg",
    }
}

// Login Component
const page = () => {
    return(
        <SignInClient />
    )
}

export default page;