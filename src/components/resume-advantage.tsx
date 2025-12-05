"use client";

import { useTranslations } from 'next-intl';

export function ResumeAdvantage() {
  const t = useTranslations('sections');
  const tAdv = useTranslations('advantages');

  return (
    <div className='content-section'>
      <div className='content-section-holder mt-3'>
        <header className='section-title-header uppercase tracking-wide'>
          <h2 className='text-base mb-1 text-gray-800 dark:text-white'>{t('advantages')}</h2>
        </header>

        <div className='content-section-container border-b border-gray-200 pb-4 border-dashed dark:border-gray-700'>
          <ul className='list-disc list-inside'>
            {tAdv.raw('items').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
