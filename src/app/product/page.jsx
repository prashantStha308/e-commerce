"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Loading from '../_components/loading';
import Header from '../_components/Header';

const Page = () => {

    const router = useRouter();
    const [ isLoading , setIsLoading ] = useState(false);

    useEffect( ()=>{
        setIsLoading(true)
        router.push('/')
    },[router] )

  return (
    <div>
        <Header />
        { isLoading && <Loading /> }
    </div>
    )
}

export default Page