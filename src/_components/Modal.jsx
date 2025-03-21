import { useRouter } from "next/navigation";

export default function Modal({ onClose ,  title , message , login=false }) {

  const router = useRouter();

  const handelRedirect = ()=>{
    router.push('/signin');
  }

  return (
    <>
      <div id="default-modal" tabIndex="-1" className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden h-full bg-black bg-opacity-40" >
          <div className="relative p-4 w-full max-w-2xl max-h-full">

              {/* Modal Content */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {title}
                      </h1>
                  </div>

                  {/* Modal Body */}
                  <div className="p-4 md:p-5 space-y-4">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {message}
                      </p>
                  </div>

                  {/* Modal Footer */}
                  <div className="flex gap-4 items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">

                      {
                        login &&

                        <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800" onClick={handelRedirect} >
                        Log In
                      </button>
                      }

                      <button data-modal-hide="default-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800" onClick={onClose}>
                        Close
                      </button>

                  </div>
              </div>
          </div>
      </div>

    </>
  )
}