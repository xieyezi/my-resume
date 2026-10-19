export function FilingInfo() {
  return (
    <nav
      aria-label='备案信息'
      className='flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center sm:justify-end sm:text-right'
    >
      <a
        href='https://beian.miit.gov.cn/'
        target='_blank'
        rel='noreferrer noopener'
        className='hover:text-gray-700 hover:underline dark:hover:text-gray-200'
      >
        渝ICP备2026024720号
      </a>
      <a
        href='https://beian.mps.gov.cn/#/query/webSearch?code=50010602505352'
        target='_blank'
        rel='noreferrer noopener'
        className='inline-flex items-center gap-1.5 hover:text-gray-700 hover:underline dark:hover:text-gray-200'
      >
        <img src='/beian/beian.png' alt='' aria-hidden='true' width='16' height='18' className='shrink-0 object-contain' />
        渝公网安备50010602505352号
      </a>
    </nav>
  );
}
