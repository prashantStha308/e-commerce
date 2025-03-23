"use client"
import useUserStore from "@/_store/UserStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Modal from "./Modal";

export default function Header(){
    const { user , isLogged } = useUserStore();
    const router = useRouter();
    const [ isModal , setIsModal ] = useState({
        state: false ,
        message: "",
        title: ""
    })

    const handleCheckout = ()=>{
        if( isLogged ){
            router.push("/checkout");
        }else{
            setIsModal({
                state: true,
                message: "You must Login to view cart and checkout",
                title: "Please Log In"
            })
        }
    }
    
    const closeModal = () => {
        setIsModal({
            state: false ,
            message: "",
            title: ""
        });
    }

    return(
        <div>
            {
                isModal.state && <Modal title={isModal.title} message={isModal.message} onClose={closeModal} login={true} />
            }
            <header id="header" className=" px-4 pt-2 overflow-x-hidden" >
                <div className="flex justify-between gap-4 p-4" >
                    <Link href={"/"}>
                        <section id="company-name" className="flex items-center gap-4" >
                            <div className="w-14 h-14 bg-purple-400 rounded-full " ></div>
                            <h1 className="text-lg md:text-2xl font-bold" > The Next Store </h1>
                        </section>
                    </Link>
                    
                    {/* for medium to larger devices */}
                    <nav className="hidden md:flex items-center gap-14">
                        <ul className="flex items-center gap-8 text-lg md:text-xl">
                            <Link href={"/"}>
                                <li className="hoverText">
                                    Home
                                </li>
                            </Link>
                            <Link href={"/category/all"}>
                                <li className="hoverText">
                                Categories 
                                </li>
                            </Link>

                            <li onClick={handleCheckout} >
                                <span className="sr-only"> Checkout </span>
                                <button className="hoverText" >
                                    <MdOutlineShoppingCartCheckout size={30} className="hoverText" />
                                </button>
                            </li>

                        </ul>
                        <Link href={isLogged ? `/profile/${user.id}` : "/signin"} >
                            <div id="user-profile" className="border border-purple-400 dark:border-purple-700 hover:border-purple-700 dark:hover:border-purple-400 p-1 rounded-full cursor-pointer transition-all duration-100 ease-in-out " >
                                    {
                                        isLogged ? 
                                            <Image
                                                src={user.avatar_url}
                                                alt={ user?.username + "'s profile picture" }
                                                width={40}
                                                height={40}
                                                className='rounded-full'
                                            />
                                        :
                                            // <div className="w-10 h-10 bg-purple-300 rounded-full" ></div>
                                            <div className="rounded-full p-1"> <FaRegUser size={25} /> </div>
                                    }
                            </div>
                        </Link>
                    </nav>

                    {/* for smaller devices */}
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default sm:block" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>

                </div>            
            </header>
        </div>
    )

}