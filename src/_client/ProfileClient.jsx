"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'
import useUserStore from '@/_store/UserStore'
import Modal from '@/_components/Modal'

const ProfileClient = () => {
    const { user , signOut } = useUserStore();
    const [ isOpen , setIsOpen ] = useState(false);
    const [ message , setMessage ] = useState("");
    const [ modalTitle , setTitle ] = useState("");
    const router = useRouter();

    console.log(user);
    const handelSignOut = ()=>{
        signOut();
        router.back();
    }

    const handelModalClose = ()=>{
      setIsOpen(false)
    }

  return (
    <>
      { isOpen && <Modal onClose={handelModalClose} title={modalTitle} message={message} /> }
        {/* Main container */}
      <div className='flex flex-col lg:flex-row items-center justify-center mb-16 p-4 min-h-screen'>
        <div className='flex flex-col lg:flex-row w-full max-w-5xl items-center justify-center gap-16 lg:gap-16'>
          
          {/* Profile picture section */}
          <div className='flex flex-col items-center lg:items-start p-4 space-y-4'>
            <Image
              src={ user?.avatar_url }
              alt={ user.username + "'s profile picture" }
              width={250}
              height={250}
              className='rounded-full'
            />
            <h1 className='text-3xl w-full font-bold text-gray-900 dark:text-gray-200'>
              { user.username }
            </h1>
          </div>

          {/* Right Hand section */}
          <div className='grid w-full  gap-2'>
            {/* User details section */}
            <div className='row-start-1 flex flex-col w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg'>
              <div className="grid grid-cols-1 gap-6">

                {/* User name */}
                <div>
                    <label
                      htmlFor="your_name"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="your_name"
                      className="block w-full mt-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 outline-none " value={ user.username } readOnly/>
                </div>

                {/* First Name */}
                <div>
                  <label
                    htmlFor="your_name"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="your_name"
                    className="block w-full mt-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 outline-none " value={user.first_name} readOnly/>
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="your_name"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="your_name"
                    className="block w-full mt-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 outline-none " value={user.last_name} readOnly/>
                </div>

              </div>
            </div>

            <div className='row-start-2 bg-red-500 hover:bg-red-600 transition-all text-white py-2 px-4 w-fit rounded-sm'>
              <button onClick={handelSignOut}>
                Log Out
              </button>
            </div>

          </div>

          {/* End of user Details */}
        </div>
      </div>
    </>
  )
}

export default ProfileClient;