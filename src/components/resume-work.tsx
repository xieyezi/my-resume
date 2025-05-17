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
                    <h3 className='font-semibold mb-2 dark:text-white'>
                      <a href='https://www.pietrastudio.com' rel='noopener noreferrer' target='_blank'>
                        Parsec Technology Co., Ltd. (高级前端开发工程师 | 远程)
                      </a>
                    </h3>
                  </header>

                  <div className='item-description py-2 leading-6'>
                    <ul className='list-disc pl-5 space-y-1'>
                      <li>
                        <strong>负责工作</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>开发团队内技术插件、工具</li>
                          <li>开发Pietra Creator Admin, Pietra Landing Page</li>
                          <li>亮点功能：Product Design、Sourcing Agent等</li>
                        </ol>
                      </li>

                      <li>
                        <strong>工程化建设</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>利用 APM 搭建 监控体系，错误捕获率 90%，线上问题响应时间 ≤30min</li>
                          <li>优化 CDN 图片存储方案（S3+CloudFront），月成本从 5.2 万降至 2.8 万</li>
                          <li>开发 Vite/Webpack 通用插件，实现组件、图标、工具库自动导入，减少手动导入代码 30%</li>
                        </ol>
                      </li>

                      <li>
                        <strong>架构升级 & 性能优化</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>重构官网至 Next.js，SSR 服务端渲染 + ISR 增量静态生成，首屏加载从 7.1s→1.2s，SEO 流量 +52%</li>
                          <li>Bundle 优化：Tree-shaking + 动态导入，生产包减少67%；图片加载从 900ms→300ms</li>
                          <li>Google 评分提升：Search Console 评分从 40→85+</li>
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
              <div className='grid md:grid-cols-5'>
                <div className='md:col-span-1 left-time mt-0 mb-2 mr-0 md:mr-4'>
                  <h4 className='md:text-left text-gray-400 flex justify-between md:block dark:opacity-80'>
                    <div>2021/12 - 2024/01</div>
                  </h4>
                </div>

                <div className='md:col-span-4'>
                  <header>
                    <h3 className='font-semibold mb-2 dark:text-white'>
                      <a href='https://www.changan.com.cn' rel='noopener noreferrer' target='_blank'>
                        长安汽车 (前端架构师 | 重庆)
                      </a>
                    </h3>
                  </header>

                  <div className='item-description py-2 leading-6'>
                    <ul className='list-disc pl-5 space-y-1'>
                      <li>
                        <strong>负责工作</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>新技术的调研和落地</li>
                          <li>
                            <strong>微应用</strong>前端框架开发工作
                          </li>
                          <li>公司内部各个汽车产品线的SDK开发工作</li>
                          <li>升级老项目的前端架构至新架构以及解决历史遗留问题</li>
                          <li>负责前端开发的技术面试和 Code Review</li>
                        </ol>
                      </li>

                      <li>
                        <strong>架构升级 & 性能优化</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>全面升级项目架构到 monorepo （实现组件化按需加载业务组件）</li>
                          <li>
                            将车控SDK升级成<strong>微应用框架</strong>，支持微应用远程自更新、无感升级，集成到多个宿主 APP ，如长安汽车、UNI
                            、凯程等（极大缩小主包体积）
                          </li>
                          <li>
                            全面升级团队技术栈，webpack5/vite + vue2.7/vue3 ,配套一系列工程插件（例如 VSCode, ESLint, Prettier 插件等）极大提升团队DX
                          </li>
                          <li>
                            对项目进行颗粒度及其细致的性能优化，例如将 Webpack 配置项按照函数式编程重构，自定义 Webpack Loader ，配合 CDN
                            实现入口体积优化等等
                          </li>
                        </ol>
                      </li>

                      <li>
                        <strong>团队建设</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>搭建团队技术规范文档，统一团队开发规范</li>
                          <li>组织内部技术分享，提升团队技术水平</li>
                          <li>
                            <a
                              className='hover:text-gray-600 underline'
                              href='https://mp.weixin.qq.com/s/5YlTookMLJHmFApVxjiKFA'
                              rel='noopener noreferrer'
                              target='_blank'
                            >
                              代表公司参加技术峰会，分享技术经验
                            </a>
                          </li>
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
