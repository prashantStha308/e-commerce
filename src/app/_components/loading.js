// LOADER ANIMATION
"use client"

export default function Loading() {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 border-r-blue-700 rounded-full" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  