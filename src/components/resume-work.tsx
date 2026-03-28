"use client";

import { useTranslations } from "next-intl";

function WorkDetailListItem({ html, hoverImageSrc }: { html: string; hoverImageSrc?: string | null }) {
  const src = hoverImageSrc?.trim();
  if (!src) {
    return <li dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return (
    <li className='group relative min-w-0 cursor-pointer'>
      <span
        className='transition-colors duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 [&_a]:transition-colors [&_a]:group-hover:text-gray-800 dark:[&_a]:group-hover:text-gray-200'
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div
        className='pointer-events-none invisible absolute left-0 top-full z-50 mt-2 box-border w-max max-w-[min(32rem,100%)] opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 md:max-w-[min(40rem,calc(100vw-2rem))]'
        aria-hidden
      >
        <div className='rounded-lg border border-gray-200 bg-white p-1.5 shadow-lg dark:border-gray-600 dark:bg-gray-900'>
          <img
            src={src}
            alt=''
            className='max-h-[min(55vh,22rem)] w-full max-w-full rounded-md object-contain md:max-h-[min(65vh,28rem)]'
          />
        </div>
      </div>
    </li>
  );
}

export function ResumeWork() {
  const t = useTranslations("sections");
  const tParsec = useTranslations("work.parsec");
  const tChangan = useTranslations("work.changan");
  const parsecEngineeringImages = (tParsec.raw("engineeringItemImages") as string[] | undefined) ?? [];

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
                            <WorkDetailListItem
                              key={index}
                              html={item}
                              hoverImageSrc={parsecEngineeringImages[index]}
                            />
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
