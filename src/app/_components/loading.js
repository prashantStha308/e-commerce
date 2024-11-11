// LOADER ANIMATION
"use client"

export default function Loading({ styles }) {
    return (
      <div className={`${ styles ? styles : "flex justify-center items-center min-h-96 -z-50 "}`} >
        <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 border-gray-700 dark:border-gray-300 border-r-blue-700 dark:border-r-blue-600 rounded-full" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  