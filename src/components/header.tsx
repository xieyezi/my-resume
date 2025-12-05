"use client";

import { Sun, Moon, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export function Header() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // 检查系统主题偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <header className='text-gray-600 mb-5'>
      <div className='container mx-auto flex pt-5 px-12 flex-row items-center max-w-screen-lg justify-end'>
        <div className='function-container flex items-center gap-3'>
          <div className='relative flex items-center'>
            <Globe className='h-4 w-4 mr-1 text-gray-500' />
            <select 
              value={locale} 
              onChange={(e) => switchLocale(e.target.value)}
              className='px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500'
            >
              <option value="zh-CN">中文</option>
              <option value="en-US">English</option>
            </select>
          </div>

          <button 
            type='button' 
            className='p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded transition-colors' 
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
          </button>
        </div>
      </div>
    </header>
  );
}
