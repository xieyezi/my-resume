export function ResumeSkills() {
  return (
    <div className="content-section">
      <div className="content-section-holder mt-3">
        <header className="section-title-header uppercase tracking-wide">
          <h2 className="text-base mb-1 text-gray-800 dark:text-white">专业技能</h2>
        </header>

        <div className="content-section-container md:grid md:grid-cols-2 md:gap-6">
          {/* First Skill Category */}
          <div className="section-detail-item mt-3 border-b border-gray-200 pb-2 border-dashed dark:border-gray-700">
            <div className="custom-content">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-5">
                  <header>
                    <h3 className="font-semibold mb-2">使用 Javascript（ES6）/ Typescript 进行前端开发，并且熟练掌握以下框架</h3>
                  </header>

                  <div className="item-description py-2">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>React 通用框架：Next.js / Astro</li>
                      <li>React 状态管理：Zustand / Jotai / Redux</li>
                      <li>React 组件库：Radix UI / Ant Design</li>
                      <li>React 常用库：React Query / Formik</li>
                      <li>React 测试: React Testing Library</li>
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
                    <h3 className="font-semibold mb-2">熟练使用 CSS3 以及周边工具 </h3>
                  </header>

                  <div className="item-description py-2">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>样式库：Tailwind.css</li>
                      <li>解决方案：CSS Module /  Styled Components / Emotion</li>
                      <li>预处理器：Sass / PostCSS</li>
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
                    <h3 className="font-semibold mb-2">掌握通用的前端工程化以及构建工具</h3>
                  </header>

                  <div className="item-description py-2">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>使用 Webpack / Vite 完成Web 应用打包以及对应的前端性能优化的经验。</li>
                      <li>掌握使用 Rollup 完成组件库打包以及发布的过程。</li>
                      <li>Prettier / ESLint 管理编码风格标准。</li>
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
                    <h3 className="font-semibold mb-2">熟练使用Git进行版本控制和代码托管，熟悉Git flow</h3>
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
