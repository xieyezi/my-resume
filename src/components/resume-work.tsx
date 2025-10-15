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
              <div className='flex flex-col'>
                <div className='left-time mt-0 mb-2'>
                  <h4 className='text-gray-400 flex justify-between md:block dark:opacity-80'>
                    <div>2024/01 - 2025/10</div>
                  </h4>
                </div>

                <div>
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
                          <li>开发 Pietra Creator Admin, Pietra Landing Page(官网)</li>
                          <li>开发 Pietra AI Copilot, Sourcing AI Agent等AI工具</li>
                          <li>开发团队内技术插件、工具(如Pietra Devtool), 提高团队DX</li>
                        </ol>
                      </li>

                      <li>
                        <strong>工程化建设</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>
                            优化 CDN 图片存储方案 (AWS CloudFront + S3), <strong>较原来月节省90%图片支出费用</strong>
                          </li>
                          <li>
                            开发 <code>@pietra-auto-tracker</code> 插件, 实现页面无痕埋点，提高数据采集效率
                          </li>
                          <li>
                            开发 <code>@pietra/auto-import</code> 插件，实现组件、图标、工具库自动导入，减少手动导入代码
                          </li>
                          <li>
                            利用 <code>@elastic/apm-rum</code> 搭建前端监控体系，提高错误捕获率 ，缩短线上问题响应时间
                          </li>
                        </ol>
                      </li>

                      <li>
                        <strong>架构升级 & 性能优化</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>重构官网至 Next.js, SSR 服务端渲染 + ISR 增量静态生成，缩短首屏加载时间，提升 SEO 流量</li>
                          <li>Bundle 优化: Tree-shaking + 动态导入, 生产包较原来减少67%</li>
                          <li>Google 评分提升: 优化LCP, FCP, CLS指标, Search Console 评分从 40→90+</li>
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
                    <div>2021/12 - 2024/01</div>
                  </h4>
                </div>

                <div>
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
                          <li>微应用前端框架开发工作</li>
                          <li>
                            公司内部各个汽车产品线的
                            <a className='hover:text-gray-600 underline' href='http://tspdemo.changan.com.cn/incall-js-api/' rel='noopener noreferrer' target='_blank'>
                              SDK API
                            </a>
                            开发工作
                          </li>
                          <li>升级老项目的前端架构至新架构以及解决历史遗留问题</li>
                          <li>开发 Incall CLI, 更新团队开发范式, 提高团队开发效率</li>
                          <li>负责前端开发的技术面试和 Code Review</li>
                        </ol>
                      </li>

                      <li>
                        <strong>架构升级 & 性能优化</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>全面升级项目架构到 monorepo （实现组件化按需加载业务组件）</li>
                          <li>
                            将车控SDK升级成<strong>微应用框架</strong>，支持微应用远程自更新、无感升级，集成到多个宿主 APP, 如长安汽车、UNI 、凯程等(极大缩小主包体积)
                          </li>
                          <li>全面升级团队技术栈, Webpack5/Vite + Vue2.7/Vue3 ,开发一系列工程插件 (例如 VSCode, ESLint, Prettier 插件等), 极大提升团队DX</li>
                          <li>对项目进行颗粒度及其细致的性能优化，例如将 Webpack 配置项按照函数式编程重构，自定义 Webpack Loader ，配合 CDN 实现入口体积优化</li>
                        </ol>
                      </li>

                      <li>
                        <strong>团队建设</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>搭建团队技术规范文档中心，统一团队开发规范</li>
                          <li>组织内部技术分享，提升团队技术水平</li>
                          <li>
                            <a className='hover:text-gray-600 underline' href='https://mp.weixin.qq.com/s/5YlTookMLJHmFApVxjiKFA' rel='noopener noreferrer' target='_blank'>
                              代表公司参加技术交流会, 分享技术经验
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
