"use client";

import { useTranslations } from 'next-intl';

export function ResumeSkills() {
  const t = useTranslations('sections');
  const tJavascript = useTranslations('skills.javascript');
  const tCss = useTranslations('skills.css');
  const tBuild = useTranslations('skills.build');
  const tGit = useTranslations('skills.git');

  return (
    <div className="content-section">
      <div className="content-section-holder mt-3">
        <header className="section-title-header uppercase tracking-wide">
          <h2 className="text-base mb-1 text-gray-800 dark:text-white">{t('skills')}</h2>
        </header>

        <div className="content-section-container md:grid md:grid-cols-2 md:gap-6">
          {/* First Skill Category */}
          <div className="section-detail-item mt-3 border-b border-gray-200 pb-2 border-dashed dark:border-gray-700">
            <div className="custom-content">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-5">
                  <header>
                    <h3 className="font-semibold mb-2">{tJavascript('title')}</h3>
                  </header>

                  <div className="item-description py-2">
                    <ul className="list-disc pl-5 space-y-1">
                      {tJavascript.raw('items').map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Skill Category */}
          <div className="section-detail-item mt-3 border-b border-gray-200 pb-2 border-dashed dark:border-gray-700">
            <div className="custom-content">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-5">
                  <header>
                    <h3 className="font-semibold mb-2">{tCss('title')}</h3>
                  </header>

                  <div className="item-description py-2">
                    <ul className="list-disc pl-5 space-y-1">
                      {tCss.raw('items').map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Skill Category */}
          <div className="section-detail-item mt-3 border-b border-gray-200 pb-2 border-dashed dark:border-gray-700">
            <div className="custom-content">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-5">
                  <header>
                    <h3 className="font-semibold mb-2">{tBuild('title')}</h3>
                  </header>

                  <div className="item-description py-2">
                    <ul className="list-disc pl-5 space-y-1">
                      {tBuild.raw('items').map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Skill Category */}
          <div className="section-detail-item mt-3 border-b border-gray-200 pb-2 border-dashed dark:border-gray-700">
            <div className="custom-content">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-5">
                  <header>
                    <h3 className="font-semibold mb-2">{tGit('title')}</h3>
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
