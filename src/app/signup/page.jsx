import SignUpClient from "@/_client/SignUpClient"

export const metadata = {
    title: "The Next Shop - Sign Up",
    description: "Explore game cards on The Next Shop",
    openGraph: {
        title: "The Next Shop - Sign In",
        description: "Explore game cards on The Next Shop",
        images: "https://e-commerce-zeta-tawny.vercel.app/vercel.svg",
        type: "website"
    },
    twitter: {
        card: "summary_large_image", 
        title: "The Next Shop - Sign Up",
        description: "Explore game cards on The Next Shop",
        images: "https://e-commerce-zeta-tawny.vercel.app/vercel.svg",
    }
}

const page = () => {
  return (
    <SignUpClient />
  )
}

export default page