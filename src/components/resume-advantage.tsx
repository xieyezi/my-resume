"use client";

import { useTranslations } from "next-intl";

export function ResumeAdvantage() {
  const t = useTranslations("sections");
  const tAdv = useTranslations("advantages");

  return (
    <div className='content-section'>
      <div className='content-section-holder mt-3'>
        <header className='section-title-header uppercase tracking-wide'>
          <h2 className='text-base mb-1 text-gray-800 dark:text-white'>{t("advantages")}</h2>
        </header>

        <div className='content-section-container border-b border-gray-200 pb-4 border-dashed dark:border-gray-700'>
          <ul className='list-disc list-inside space-y-1'>
            {tAdv.raw("items").map((item: string, index: number) => {
              return item.includes("2022") ? (
                <li key={index}>
                  <a href='https://zhuanlan.zhihu.com/p/581717444' target='_blank'>
                    {item}
                  </a>
                </li>
              ) : item.includes("CN115269034A") ? (
                <li key={index}>
                  <a href='https://www.baiten.cn/so/list/%E8%8B%8F%E4%B8%9A%E7%BA%AF.html?merge=no-merge&sort=DESC&sortField=score&pageSize=10&pageIndex=1&sc=35184372088831' target='_blank'>
                    {item}
                  </a>
                </li>
              ) : (
                <li key={index}>{item}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
