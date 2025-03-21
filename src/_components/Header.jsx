import Link from "next/link";

export default function Header(){

    return(
        <header id="header" className=" px-4 py-2" >
            <div className="flex justify-between gap-4 border-b border-b-purple-400 p-4" >
                <Link href={"/"}>
                    <section id="company-name" className="flex items-center gap-4" >
                        <div className="w-14 h-14 bg-purple-400 rounded-full " ></div>
                        <h1 className="text-lg md:text-2xl font-bold" > The Next Store </h1>
                    </section>
                </Link>
                
                {/* for medium to larger devices */}
                <nav className="hidden md:flex items-center gap-4">
                    <ul className="flex items-center gap-4 text-lg md:text-xl">
                        <Link href={"#home"}>
                            <li className="hoverText">
                                Home
                            </li>
                        </Link>
                        <Link href={"#category"}>
                            <li className="hoverText">
                            Categories 
                            </li>
                        </Link>
                    </ul>
                    <div id="user-profile" className="border border-purple-400 p-1 rounded-full" >
                        <Link href={"#profile"}>
                            <div className="w-5 h-5 bg-purple-300 rounded-full" ></div>
                        </Link>
                    </div>
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
    )

}