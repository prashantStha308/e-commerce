"use client"
import { useState, useEffect } from 'react';
import { SunIcon , MoonIcon } from '@heroicons/react/20/solid';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Set theme based on saved preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className=' fixed bottom-8 right-4 sm:right-16 z-50 '>
      <button
        onClick={toggleTheme}
        className="p-4 rounded-full bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
      >
        {theme === 'light' ? <SunIcon width={30} height={30} /> : <MoonIcon width={30} height={30} />}
      </button>
    </div>
  );
}
