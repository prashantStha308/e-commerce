"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Loading from '@/_components/loading'
import Modal from '@/_components/Modal'
import useUserStore from '@/_store/UserStore'

// Login Component
const SignInClient = () => {
    
    const router = useRouter();
    const { signIn } = useUserStore();

    const [ isOpen , setIsOpen ] = useState(false);
    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");
    const [ isLoading , setIsLoading ] = useState(false);
    const [ modalMessage , setModalMessage ] = useState("");

    const handelEmail = (e)=>{
        setEmail(e.target.value)
    }

    const handelPassword = (e)=>{
        setPassword(e.target.value)
    }
    
    const handelSignIn = async (e)=>{
        e.preventDefault();
        
        setIsLoading(true)
        const { status , data , message } = await signIn( email );
        setModalMessage(message);
        setIsLoading(false)
        if( status === 'found' ){
            setIsOpen(false)
            router.back();
        }else{
            setIsOpen(true)
        }
    }

    const handelModalClose = () => {
        setIsOpen(false);
    }

    
  return (
    <>
        { isLoading && <Loading styles={'signin-loader'} /> }
        { isOpen && <Modal onClose={handelModalClose} title={'Failed to Sign In'} message={modalMessage} /> }
        <div className="bg-gray-50 dark:bg-gray-800 font-[sans-serif]">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                <div className="max-w-md w-full">

                <div className="p-8 rounded-2xl bg-gray-200 dark:bg-gray-900 shadow">
                    <h2 className="text-gray-800 dark:text-white text-center text-2xl font-bold">Sign in</h2>

                    {/* Form */}
                    <form className="mt-8 space-y-4" onSubmit={handelSignIn}>

                        {/* Email */}
                        <div>
                            <label className="text-gray-800 dark:text-white text-sm mb-2 block"> Email </label>
                            <div className="relative flex items-center">
                                <input name="email" type="email" required className="w-full text-gray-800 dark:text-gray-50  text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter email" onChange={handelEmail} value={email} />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                </svg>
                            </div>
                        </div>
                        {/* Password */}
                        <div>
                            <label className="text-gray-800 dark:text-white text-sm mb-2 block">Password</label>
                            <div className="relative flex items-center">
                                <input name="password" type="password" required className="w-full text-gray-800 dark:text-gray-50  text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter password" onChange={handelPassword} value={password} />

                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4">
                            {/* Remember me? */}
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800 dark:text-white">
                                    Remember me
                                </label>
                            </div>

                            {/* Forget Your Password? */}
                            <div className="text-sm">
                                <a href="jajvascript:void(0);" className="text-blue-600 hover:underline font-semibold">
                                    Forgot your password?
                                </a>
                            </div>

                        </div>

                        {/* Sign In */}
                        <div className="!mt-8">
                            <input type="submit" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none" value={"Sign In"} />
                        </div>
                        {/* Register Here */}
                        <p className="text-gray-800 dark:text-white text-sm !mt-8 text-center">Don{"'"}t have an account? <Link href="/signup" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</Link></p>
                    </form>

                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignInClient;