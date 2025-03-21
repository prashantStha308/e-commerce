import ProfileClient from '@/_client/ProfileClient';
import { getUserById } from '@/_store/UserStore';
import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({ params }){
  const {id} = params;
  if (!id || id.trim().length === 0 || isNaN(Number(id))) {
    console.error("Invalid Id: " , id );
    notFound();
  }
  try {
    const res = await getUserById(id);
    if( res.status !== "found" ){
      throw new Error(res.message);
    }
    const user = res.data;
    return {
        title: `The Next Shop | ${user.username}`,
        description: `Checkout ${user.username}'s profile`,
        openGraph: {
            title: `The Next Shop | ${user.username}`,
            description: `Checkout ${user.username}'s profile at The Next Shop`,
            images: user.avatar_url,
            type: "website",
        },
        twitter: {
          card: "summary_large_image", 
          title: `The Next Shop | ${user.username}`,
          description: `Checkout ${user.username}'s profile at The Next Shop`,
          image: user.avatar_url ,
        }
    };
  } catch (error) {
    console.error(error);
    notFound();
  }
}

const page = ({ params }) => {
  const { id } = params;

  if( !id || id.trim().length === 0 || isNaN(Number(id)) ){
    console.error("Invalid Id: " , id );
    notFound();
  }

  return (
    <ProfileClient id={id} />
  )
}

export default page