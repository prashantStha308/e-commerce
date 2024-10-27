"use client";
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Increment the count
  const handleCountInr = () => {
    setCount((prev) => prev + 1);
  };

  // Decrement the count, ensuring it doesn't go below 0
  const handleCountDcr = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="flex items-center gap-4">
      <button
      type='button'
        className="rounded-sm bg-indigo-600 hover:bg-indigo-800 transition-all"
        onClick={handleCountDcr} // Corrected: Decrement on MinusIcon
      >
        <MinusIcon width={40} height={40} />
      </button>

      <span className="border border-white py-2 px-3">{count}</span>

      <button
      type='button'
        className="rounded-sm bg-indigo-600 hover:bg-indigo-800 transition-all"
        onClick={handleCountInr} // Corrected: Increment on PlusIcon
      >
        <PlusIcon width={40} height={40} />
      </button>
    </div>
  );
};

export default Counter;
