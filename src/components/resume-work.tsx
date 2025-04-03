export function ResumeWork() {
  return (
    <div className='content-section'>
      <div className='content-section-holder mt-3'>
        <header className='section-title-header uppercase tracking-wide'>
          <h2 className='text-base mb-1 text-gray-800 dark:text-white'>工作经历</h2>
        </header>

        <div className='content-section-container'>
          {/* First Job */}
          <div className='section-detail-item mt-3 border-b border-gray-200 pb-2 border-dashed dark:border-gray-700'>
            <div className='normal-content'>
              <div className='grid md:grid-cols-5'>
                <div className='md:col-span-1 left-time mt-0 mb-2 mr-0 md:mr-4'>
                  <h4 className='md:text-left text-gray-400 flex justify-between md:block dark:opacity-80'>
                    <div>2024/01 - 至今</div>
                  </h4>
                </div>

                <div className='md:col-span-4'>
                  <header>
                    <h3 className='font-semibold mb-2 dark:text-white'>高级前端开发工程师</h3>
                    <div className='flex justify-between flex-wrap mb-2 text-gray-400 dark:opacity-80'>
                      <h4>
                        Parsec Technology Co., Ltd. <span className='ml-2'>远程</span>
                      </h4>
                    </div>
                  </header>

                  <div className='item-description py-2'>
                    <p>
                      <strong>Pietra </strong>- 美国网红电商平台(
                      <a href='https://www.pietrastudio.com' rel='noopener noreferrer' target='_blank'>
                        https://www.pietrastudio.com
                      </a>
                      )
                    </p>
                    <p />
                    <p>负责星盘系统 Web 端架构设计以及开发工作。</p>
                    <p>
                      作为一个全新的项目，使用了目前 <strong>React</strong> 最新的技术栈：
                    </p>
                    <ul className='list-disc pl-5 space-y-1'>
                      <li>
                        使用 <strong>Next.js</strong> 以及 <strong>Typescript</strong> 作为开发框架和语言。
                      </li>
                      <li>
                        使用 <strong>Zustand</strong>，<strong>React Router</strong> 以及 <strong>React Query</strong> 等一系列最新周边生态工具。
                      </li>
                      <li>
                        使用 <strong>Radix UI</strong> 以及<strong>Tailwind.css</strong> 作为无样式组件库以及样式解决方案。
                      </li>
                    </ul>
                    <div className='py-2' />
                    <p>使用如下技术攻克一系列技术难题：</p>
                    <ul className='list-disc pl-5 space-y-1'>
                      <li>
                        二次封装 <strong>React Virtualized</strong> 借助虚拟渲染的设计，提升大数据量渲染的性能问题。
                      </li>
                      <li>
                        <strong>Formik</strong> 作为表单状态管理库，提升大表单数据的性能问题。
                      </li>
                      <li>
                        使用&nbsp;<strong>Framer Motion</strong>&nbsp;添加高质量的交互效果。
                      </li>
                      <li>
                        封装 <strong>Zustand</strong> 的功能实现状态的 Redo/Undo 功能。
                      </li>
                      <li>
                        通过 文件分片 / 分片生成 Hash / 合并请求 实现<strong>大文件上传</strong>以及<strong>断点续传</strong>。
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
              <div className='grid md:grid-cols-5'>
                <div className='md:col-span-1 left-time mt-0 mb-2 mr-0 md:mr-4'>
                  <h4 className='md:text-left text-gray-400 flex justify-between md:block dark:opacity-80'>
                    <div>2021/12 - 2024/01</div>
                  </h4>
                </div>

                <div className='md:col-span-4'>
                  <header>
                    <h3 className='font-semibold mb-2 dark:text-white'>前端技术架构师</h3>
                    <div className='flex justify-between flex-wrap mb-2 text-gray-400 dark:opacity-80'>
                      <h4>
                        长安汽车有限公司 <span className='ml-2'>重庆</span>
                      </h4>
                    </div>
                  </header>

                  <div className='item-description py-2'>
                    <p>
                      <strong>主导和开发项目基础组件库 Ali components(</strong>
                      <a href='https://github.com/fake' rel='noopener noreferrer' target='_blank'>
                        https://github.com/fake
                      </a>
                      <strong>)</strong>
                    </p>
                    <ul className='list-disc pl-5 space-y-1'>
                      <li>
                        使用 <strong>React</strong> 以及 <strong>Typescript</strong> 作为开发框架和语言。
                      </li>
                      <li>
                        设计为无样式 <strong>headless</strong> 组件库, 实现良好的可访问性。
                      </li>
                      <li>
                        高度<strong>自定义</strong>以及<strong>可组合式</strong>的 API 设计
                      </li>
                      <li>
                        使用 <strong>Jest</strong> 以及<strong> React Testing Library</strong> 实现单测覆盖率大于 90%
                      </li>
                      <li>
                        结合 <strong>Github Actions</strong> 完成CI/CD 以及自动发布至内部 NPM
                      </li>
                    </ul>
                    <div className='py-2' />
                    <p>
                      <strong>负责祥云内部管理系统的开发工作</strong>
                    </p>
                    <ul className='list-disc pl-5 space-y-1'>
                      <li>
                        使用 <strong>Next.js</strong> 进行开发
                      </li>
                      <li>
                        在 <strong>React-Admin</strong> 上进行二次封装
                      </li>
                      <li>解决复杂权限配置问题</li>
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
