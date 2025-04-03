"use client";

import { useState } from 'react';

export function ThemeSelector() {
  const [activeTheme, setActiveTheme] = useState<'white' | 'black'>('white');

  const handleThemeChange = (theme: 'white' | 'black') => {
    setActiveTheme(theme);
    if (theme === 'black') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="theme-selector">
      <div className="fixed bottom-0 left-0 right-0 w-full p-2 bg-slate-200 flex items-center">
        <span className="text-slate-500 font-semibold text-sm mr-4">点击预览其他主题颜色</span>
        <ul className="flex items-center">
          <li className="text-center">
            <button
              className={`block theme-link ${activeTheme === 'white' ? 'font-bold' : ''}`}
              onClick={() => handleThemeChange('white')}
            >
              <span className="text-slate-500 text-sm">明色</span>
            </button>
          </li>
          <li className="text-center ml-4">
            <button
              className={`block theme-link ${activeTheme === 'black' ? 'font-bold' : ''}`}
              onClick={() => handleThemeChange('black')}
            >
              <span className="text-slate-500 text-sm">暗色</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
