export function ResumeEducation() {
  return (
    <div className="content-section">
      <div className="content-section-holder mt-3">
        <header className="section-title-header uppercase tracking-wide">
          <h2 className="text-base mb-1 text-gray-800 dark:text-white">教育经历</h2>
        </header>

        <div className="content-section-container md:grid md:grid-cols-2 md:gap-6">
          {/* First Education */}
          <div className="section-detail-item mt-3 border-b border-gray-200 pb-2 border-dashed dark:border-gray-700">
            <div className="normal-content">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-1 left-time mt-0 mb-2 mr-0 md:mr-4">
                  <h4 className="md:text-left text-gray-400 flex justify-between md:block dark:opacity-80">
                    <div>2010/09 - 2012/06</div>
                  </h4>
                </div>

                <div className="md:col-span-4">
                  <header>
                    <h3 className="font-semibold mb-2 dark:text-white">硕士</h3>
                    <div className="flex justify-between flex-wrap mb-2 text-gray-400 dark:opacity-80">
                      <h4>清华大学 <span className="ml-2">软件工程</span></h4>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>

          {/* Second Education */}
          <div className="section-detail-item mt-3 border-b border-gray-200 pb-2 border-dashed dark:border-gray-700">
            <div className="normal-content">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-1 left-time mt-0 mb-2 mr-0 md:mr-4">
                  <h4 className="md:text-left text-gray-400 flex justify-between md:block dark:opacity-80">
                    <div>2006/09 - 2010/07</div>
                  </h4>
                </div>

                <div className="md:col-span-4">
                  <header>
                    <h3 className="font-semibold mb-2 dark:text-white">学士</h3>
                    <div className="flex justify-between flex-wrap mb-2 text-gray-400 dark:opacity-80">
                      <h4>湖南大学 <span className="ml-2">计算机科学与技术</span></h4>
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
