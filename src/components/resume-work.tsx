"use client";

import { useTranslations } from "next-intl";

export function ResumeWork() {
  const t = useTranslations("sections");
  const tParsec = useTranslations("work.parsec");
  const tChangan = useTranslations("work.changan");

  return (
    <div className='content-section'>
      <div className='content-section-holder mt-3'>
        <header className='section-title-header uppercase tracking-wide'>
          <h2 className='text-base mb-1 text-gray-800 dark:text-white'>{t("workExperience")}</h2>
        </header>

        <div className='content-section-container'>
          {/* First Job */}
          <div className='section-detail-item mt-3 border-b border-gray-200 pb-2 border-dashed dark:border-gray-700'>
            <div className='normal-content'>
              <div className='flex flex-col'>
                <div className='left-time mt-0 mb-2'>
                  <h4 className='text-gray-400 flex justify-between md:block dark:opacity-80'>
                    <div>{tParsec("period")}</div>
                  </h4>
                </div>

                <div>
                  <header>
                    <h3 className='font-semibold mb-2 dark:text-white'>
                      <a href='https://www.pietrastudio.com' rel='noopener noreferrer' target='_blank'>
                        {tParsec("company")}
                      </a>
                    </h3>
                  </header>

                  <div className='item-description py-2 leading-6'>
                    <ul className='list-disc pl-5 space-y-1'>
                      <li>
                        <strong>{tParsec("responsibilities")}</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          {tParsec.raw("responsibilitiesItems").map((item: string, index: number) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ol>
                      </li>

                      <li>
                        <strong>{tParsec("engineering")}</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          {tParsec.raw("engineeringItems").map((item: string, index: number) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ol>
                      </li>

                      <li>
                        <strong>{tParsec("architecture")}</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          {tParsec.raw("architectureItems").map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ol>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Job */}
          <div className='section-detail-item mt-3 border-b border-gray-200 pb-2 border-dashed dark:border-gray-700'>
            <div className='normal-content'>
              <div className='flex flex-col'>
                <div className='left-time mt-0 mb-2'>
                  <h4 className='text-gray-400 flex justify-between md:block dark:opacity-80'>
                    <div>{tChangan("period")}</div>
                  </h4>
                </div>

                <div>
                  <header>
                    <h3 className='font-semibold mb-2 dark:text-white'>
                      <a href='https://www.changan.com.cn' rel='noopener noreferrer' target='_blank'>
                        {tChangan("company")}
                      </a>
                    </h3>
                  </header>

                  <div className='item-description py-2 leading-6'>
                    <ul className='list-disc pl-5 space-y-1'>
                      <li>
                        <strong>{tChangan("responsibilities")}</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          {tChangan.raw("responsibilitiesItems").map((item: string, index: number) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ol>
                      </li>

                      <li>
                        <strong>{tChangan("architecture")}</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          {tChangan.raw("architectureItems").map((item: string, index: number) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ol>
                      </li>

                      <li>
                        <strong>{tChangan("teamBuilding")}</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          {tChangan.raw("teamBuildingItems").map((item: string, index: number) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ol>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
