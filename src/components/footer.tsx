"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className='container mx-auto pt-4 pb-6 px-12 flex flex-wrap flex-col sm:flex-row max-w-screen-lg text-gray-500 text-sm leading-5 items-center'>
      <div className='flex items-center gap-2 text-center sm:text-left'>
        <span>
          {t("copyright")}
          <Link href='https://github.com/xieyezi' target='_blank' className='hover:underline'>
            💗 xieyezi
          </Link>
        </span>
        <span className='text-gray-400'>|</span>
        <span>build with next.js</span>
      </div>
    </footer>
  );
}
