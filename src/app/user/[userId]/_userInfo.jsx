"use client"
import { useUser } from '@/app/_store/UserContext'
import Image from 'next/image'

const UserInfo = () => {
    const { currentUser } = useUser();


  return (
    <>
        {/* Main container */}
      <div className='flex flex-col lg:flex-row items-center justify-center mb-16 p-4 min-h-screen'>
        <div className='flex flex-col lg:flex-row w-full max-w-5xl items-center justify-center gap-16 lg:gap-16'>
          
          {/* Profile picture section */}
          <div className='flex flex-col items-center lg:items-start p-4 space-y-4'>
            <Image
              src={ currentUser.avatar_url }
              alt={ currentUser.username + "'s profile picture" }
              width={250}
              height={250}
              className='rounded-full'
            />
            <h1 className='text-3xl w-full font-bold text-gray-900 dark:text-gray-200'>
              { currentUser.username }
            </h1>
          </div>

          {/* User details section */}
          <div className='flex flex-col w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg'>
            <div className="grid grid-cols-1 gap-6">

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
                  className="block w-full mt-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 outline-none " value={ currentUser.username } readOnly/>
              </div>

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
                  className="block w-full mt-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 outline-none " value={currentUser.first_name} readOnly/>
              </div>

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
                  className="block w-full mt-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 outline-none " value={currentUser.last_name} readOnly/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserInfo;