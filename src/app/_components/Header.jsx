"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { UserCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import ThemeToggle from "./ToggleTheme";

 
const Header = ( { currentPage } ) => {

    // State for menu bar on smaller devices
    const [ isOpen , setIsOpen ] = useState(false);
    
    const handelIsOpen = ()=> setIsOpen(true);
    const handelIsClose = ()=> setIsOpen(false);


    
  return (
    <header>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" width={32} height={20} />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">NovaNest</span>
                </Link>
                {/* Button On click, open the menu bar, for smaller devices */}
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default sm:block" aria-expanded="false" onClick={handelIsOpen}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                {/* Menu for smaller devices */}
                <div
                    className={`fixed inset-0 flex items-center bg-black bg-opacity-35 justify-center transition-opacity duration-300 z-10 ${
                        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                    >
                    <div className="bg-red p-6 rounded-lg max-w-sm w-full">

                        <ul className="h-full w-40 fixed top-0 right-0 pt-20 pl-4 font-medium bg-gray-800 dark:bg-gray-800 text-white dark:text-white ">

                            <div className=" absolute top-0 right-0 w-full mt-4 flex justify-between align-middle">
                                <button
                                onClick={ handelIsClose }
                                className=" p-4 text-white rounded]"
                                >
                                    <XMarkIcon width={20} />
                                </button>

                                <Link href="/login">
                                    <div className="mr-2">
                                        <UserCircleIcon width={40} height={40} />
                                    </div>
                                </Link>
                            </div>

                            <li>
                            <Link href="/" className={`block py-2 text-xl px-3 md:p-0  bg-transparent hover:text-blue-500 ${ currentPage === 'home' ? "text-blue-700 md:dark:text-blue-500" : ""  }`} >Home</Link>
                            </li>

                            <li>
                            <Link href="/category" className={`block py-2 text-xl px-3 md:p-0  bg-transparent hover:text-blue-500 ${ currentPage === 'category' ? "text-blue-700 md:dark:text-blue-500" : ""  }`}>Category</Link>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* For Bigger Screens */}
                <div className=" hidden w-full md:block md:w-auto" id="navbar-default">
                <ThemeToggle />
                    <ul className="font-medium flex flex-col align-middle  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        <li>
                            <Link href="/" className={`block py-2 text-xl px-3 md:p-0 text-gray-900 dark:text-gray-100  bg-transparent hover:text-blue-500 dark:hover:text-blue-500 ${ currentPage === 'home' ? "text-blue-700 md:dark:text-blue-500" : ""  }`} >Home</Link>
                        </li>

                        <li>
                            <Link href="/category" className={`block py-2 text-xl px-3 md:p-0 text-gray-900 dark:text-gray-100 bg-transparent hover:text-blue-500 dark:hover:text-blue-500 ${ currentPage === 'category' ? "text-blue-700 md:dark:text-blue-500" : ""  }`}>Category</Link>
                        </li>

                        <li>
                            <Link href="/signin">
                                <div className="flex justify-center align-middle text-gray-900 dark:text-gray-200">
                                    <UserCircleIcon width={40} height={40} />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    </header>
  )
}

export default Header;