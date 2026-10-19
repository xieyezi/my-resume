"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FilingInfo } from "@/components/filing-info";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className='container mx-auto pt-4 pb-6 px-12 flex flex-wrap flex-col gap-y-2 sm:flex-row sm:justify-between max-w-screen-lg text-gray-500 dark:text-gray-400 text-sm leading-5 items-center'>
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
      <FilingInfo />
    </footer>
  );
}
