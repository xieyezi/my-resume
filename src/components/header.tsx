"use client";

import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className='text-gray-600 mb-5'>
      <div className='container mx-auto flex pt-5 px-12 flex-row items-center max-w-screen-lg justify-end'>
        <div className='function-container flex items-center'>
          {/*<div className='relative' id='download-area'>
            <button className='inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base md:mt-0'>
              <Download className='h-4 w-4 mr-1' />
              下载
            </button>
          </div>

          <div className='relative ml-3' id='share-area'>
            <button className='inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base md:mt-0'>
              <Share2 className='h-4 w-4 mr-1' />
              分享
            </button>
          </div>*/}

          <button type='button' className='ml-3' onClick={toggleTheme}>
            {theme === "light" ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
          </button>
        </div>
      </div>
    </header>
  );
}
