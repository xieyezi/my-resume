"use client";

import { Sun, Moon, Languages, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 从localStorage读取保存的主题，如果不存在则检查系统主题偏好
    const savedTheme = localStorage.getItem("xieyezi-resume-theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(currentTheme);
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("xieyezi-resume-theme", newTheme);

    if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setLanguageDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className='text-gray-600 mb-5'>
      <div className='container mx-auto flex pt-5 px-12 flex-row items-center max-w-screen-lg justify-end'>
        <div className='function-container flex items-center gap-3'>
          <button type='button' className='p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded transition-colors' onClick={toggleTheme} aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}>
            {theme === "light" ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
          </button>
          <div className='relative' ref={dropdownRef}>
            <button type='button' className='p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded transition-colors flex items-center gap-1' onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)} aria-label='Language selector'>
              <Languages className='h-4 w-4 text-gray-500 dark:text-gray-400' />
              <ChevronDown className='h-3 w-3 text-gray-500 dark:text-gray-400' />
            </button>

            {languageDropdownOpen && (
              <div className='absolute right-0 top-full mt-1 z-50 min-w-[120px] overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 p-1 shadow-lg data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 animate-in data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95'>
                <button
                  type='button'
                  onClick={() => switchLocale("zh-CN")}
                  className='relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 text-gray-700 dark:text-gray-200'
                >
                  <span className={locale === "zh-CN" ? "font-medium" : "font-normal"}>中文</span>
                  {locale === "zh-CN" && (
                    <span className='absolute right-2 flex h-3.5 w-3.5 items-center justify-center text-gray-700 dark:text-gray-200'>
                      <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                      </svg>
                    </span>
                  )}
                </button>
                <button
                  type='button'
                  onClick={() => switchLocale("en-US")}
                  className='relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 dark:hover:bg-neutral-700 focus:bg-gray-100 dark:focus:bg-neutral-700 text-gray-700 dark:text-gray-200'
                >
                  <span className={locale === "en-US" ? "font-medium" : "font-normal"}>English</span>
                  {locale === "en-US" && (
                    <span className='absolute right-2 flex h-3.5 w-3.5 items-center justify-center text-gray-700 dark:text-gray-200'>
                      <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
