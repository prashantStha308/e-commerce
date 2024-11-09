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
    localStorage.setItem('theme', newTheme); // Save preference
  };

  return (
    <div className=' fixed bottom-8 right-16 '>
      <button
        onClick={toggleTheme}
        className="p-8 rounded-full bg-gray-300 dark:bg-gray-400 text-gray-900"
      >
        {theme === 'light' ? <SunIcon width={30} height={30} /> : <MoonIcon width={30} height={30} />}
      </button>
    </div>
  );
}
