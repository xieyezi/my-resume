"use client";

import { useTranslations } from 'next-intl';

export function ResumeEducation() {
  const t = useTranslations('sections');
  const tEdu = useTranslations('education');

  return (
    <div className='content-section'>
      <div className='content-section-holder mt-3'>
        <header className='section-title-header uppercase tracking-wide'>
          <h2 className='text-base mb-1 text-gray-800 dark:text-white'>{t('education')}</h2>
        </header>

        <div className='content-section-container'>
          {/* First Education */}
          <div className='section-detail-item mt-3 border-b border-gray-200 pb-2 border-dashed dark:border-gray-700'>
            <div className='normal-content'>
              <div className='flex flex-col'>
                <div>
                  <header>
                    <h3 className='font-semibold mb-2 dark:text-white'>{tEdu('degree')}</h3>
                    <div className='flex justify-between flex-wrap mb-2 text-gray-400 dark:opacity-80'>
                      <h4>
                        {tEdu('school')} <span className='ml-2'>{tEdu('major')}</span>
                      </h4>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
