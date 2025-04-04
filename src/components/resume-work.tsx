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

                  <div className='item-description py-2 leading-6'>
                    <p>
                      <strong> Pietra </strong>- 美国网红电商平台 (
                      <a href='https://www.pietrastudio.com' rel='noopener noreferrer' target='_blank'>
                        https://www.pietrastudio.com
                      </a>
                      )
                    </p>
                    <p />
                    <p>负责Pietra Creator Admin, Pietra Website 以及团队内技术工具的开发工作。</p>
                    <p>主要成就：</p>
                    <ul className='list-disc pl-5 space-y-1'>
                      <li>
                        总用户 <strong>400w+</strong>，月活用户 <strong>80w+</strong>
                      </li>
                      <li>
                        官网月访问量 <strong>90k+</strong>，月曝光量 <strong>10000k+</strong>
                      </li>
                      <li>
                        月 GMV <strong>¥24亿+ </strong>，月新增用户 <strong>20w+</strong>，月新增供应商 <strong>1000+</strong>
                      </li>
                    </ul>
                    <div className='py-2' />
                    <p>主要贡献：</p>
                    <ul className='list-disc pl-5 space-y-1'>
                      <li>
                        <strong>工程化建设</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>开发 Vite/Webpack 通用插件，实现组件、图标、工具库自动导入，减少手动导入代码 40%</li>
                          <li>搭建 Sentry + APM 监控体系，错误捕获率 98%，线上问题响应时间 ≤30min</li>
                          <li>优化 CDN 图片存储方案（S3+CloudFront），月成本从 5.2 万降至 2.8 万</li>
                        </ol>
                      </li>

                      <li>
                        <strong>架构升级 & 性能优化</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>重构官网至 Next.js，SSR 服务端渲染 + ISR 增量静态生成，首屏加载从 7.1s→1.2s，SEO 流量 +52%</li>
                          <li>Bundle 优化：Tree-shaking + 动态导入，生产包减少67%；图片加载从 900ms→300ms</li>
                          <li>Google 评分提升：Search Console 评分从 40→85+，TTFB 降低 58%</li>
                        </ol>
                      </li>

                      <li>
                        <strong>团队提效</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>开发 UI 组件库，覆盖 85% 业务场景，开发效率 +60%，设计还原度 95%</li>
                          <li>制定设计 Token 规范，统一色彩/间距/动效，自动生成 TypeScript 类型，API 文档覆盖率 100%</li>
                          <li>搭建技术文档中心，沉淀通用开发规范，建立团队 Git 工作流</li>
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
                    <h3 className='font-semibold mb-2 dark:text-white'>前端技术架构师</h3>
                    <div className='flex justify-between flex-wrap mb-2 text-gray-400 dark:opacity-80'>
                      <h4>
                        长安汽车 <span className='ml-2'>重庆</span>
                      </h4>
                    </div>
                  </header>

                  <div className='item-description py-2 leading-6'>
                    <p>
                      <strong> 长安汽车 </strong>- 中国本土著名汽车品牌 (
                      <a href='https://www.changan.com.cn' rel='noopener noreferrer' target='_blank'>
                        https://www.changan.com.cn
                      </a>
                      )
                    </p>
                    <p />
                    <p>负责长安汽车车控APP的SDK前端架构设计与开发工作，以及前端团队管理工作。</p>
                    <p>主要成就：</p>
                    <ul className='list-disc pl-5 space-y-1'>
                      <li>
                        总用户 <strong>400w+</strong>，月活用户 <strong>80w+</strong>
                      </li>
                      <li>
                        官网月访问量 <strong>90k+</strong>，月曝光量 <strong>10000k+</strong>
                      </li>
                      <li>
                        月 GMV <strong>¥24亿+ </strong>，月新增用户 <strong>20w+</strong>，月新增供应商 <strong>1000+</strong>
                      </li>
                    </ul>
                    <div className='py-2' />
                    <p>主要贡献：</p>
                    <ul className='list-disc pl-5 space-y-1'>
                      <li>
                        <strong>工程化建设</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>开发 Vite/Webpack 通用插件，实现组件、图标、工具库自动导入，减少手动导入代码 40%</li>
                          <li>搭建 Sentry + APM 监控体系，错误捕获率 98%，线上问题响应时间 ≤30min</li>
                          <li>优化 CDN 图片存储方案（S3+CloudFront），月成本从 5.2 万降至 2.8 万</li>
                        </ol>
                      </li>

                      <li>
                        <strong>架构升级 & 性能优化</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>重构官网至 Next.js，SSR 服务端渲染 + ISR 增量静态生成，首屏加载从 7.1s→1.2s，SEO 流量 +52%</li>
                          <li>Bundle 优化：Tree-shaking + 动态导入，生产包减少67%；图片加载从 900ms→300ms</li>
                          <li>Google 评分提升：Search Console 评分从 40→85+，TTFB 降低 58%</li>
                        </ol>
                      </li>

                      <li>
                        <strong>团队提效</strong>
                        <ol className='list-decimal pl-5 space-y-1'>
                          <li>开发 UI 组件库，覆盖 85% 业务场景，开发效率 +60%，设计还原度 95%</li>
                          <li>制定设计 Token 规范，统一色彩/间距/动效，自动生成 TypeScript 类型，API 文档覆盖率 100%</li>
                          <li>搭建技术文档中心，沉淀通用开发规范，建立团队 Git 工作流</li>
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
