import Header from '@/app/_components/Header';
import UserInfo from './_userInfo';
import React from 'react';

// Page's Meta Data
export const metadata = {
  title: "NovaNest | User",
  description: "An e-commerce website. First project using Next.js",
  // openGraph: {
  //   title: "NovaNest | Home",
  //   description: "An e-commerce website. First project using Next.js",
  //   image: "https://e-commerce-zeta-tawny.vercel.app/ogLogo.png",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image", 
  //   title: "NovaNest | Home",
  //   description: "An e-commerce website. First project using Next.js",
  //   image: "https://e-commerce-zeta-tawny.vercel.app/ogLogo.png",
  // }
};

const UserPage = async ({ params }) => {
  const { userId } = await params;

  return (
    <>
      <Header />
      {/* Main container */}
        <UserInfo uId={userId} />
    </>
  );
};

export default UserPage;
