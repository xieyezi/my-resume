import Link from "next/link";

export function Footer() {
  return (
    <footer className="container mx-auto py-4 px-12 flex flex-wrap flex-col sm:flex-row max-w-screen-lg text-gray-500 text-sm leading-5 items-center">
      <p className="text-center sm:text-left">
        © 2025{" "}
        <Link href="https://easycv.cn" target="_blank" className="hover:underline">
          简单简历
        </Link>{" "}
        —
        <Link href="https://beian.miit.gov.cn/" target="_blank" className="ml-1 hover:underline">
          沪ICP备2021014187号-1
        </Link>
      </p>
      <span className="inline-flex sm:ml-auto justify-center sm:justify-start flex-wrap sm:mt-2">
        <Link className="mr-3 hover:underline" href="https://docs.easycv.cn/pages/about.html" target="_blank">
          我们的故事
        </Link>
        <Link className="mr-3 hover:underline" href="https://docs.easycv.cn/pages/contact.html" target="_blank">
          联系我们
        </Link>
        <Link className="mr-3 hover:underline" href="https://easycv.cn/templates" target="_blank">
          简历模板
        </Link>
        <Link className="mr-3 hover:underline" href="https://easycv.cn/examples" target="_blank">
          简历范本
        </Link>
        <Link className="mr-3 hover:underline" href="https://docs.easycv.cn/" target="_blank">
          文档中心
        </Link>
      </span>
    </footer>
  );
}
