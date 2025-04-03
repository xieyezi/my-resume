import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Globe, Github, Linkedin } from "lucide-react";

export function ResumeProfile() {
  return (
    <header className="resume-header md:flex md:items-center md:justify-between md:flex-row-reverse mb-4">
      <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto md:mx-0">
        <Image
          src="https://ext.same-assets.com/3652286615/171585982.png"
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>

      <div className="header-info md:text-left text-center mt-2 md:mt-0">
        <h1 className="text-xl mb-2 text-gray-800 dark:text-white font-semibold">马超云</h1>
        <h2 className="mb-2 text-gray-600 dark:text-gray-300">高级前端开发工程师 上海</h2>

        <ul className="link-list text-left flex md:items-center flex-wrap">
          <li className="mr-3 mb-2 flex items-center">
            <Mail className="w-4 h-4 mr-1 text-gray-500" />
            <a href="mailto:hey@easycv.cn" className="text-gray-600 dark:text-gray-300 hover:text-gray-800">hey@easycv.cn</a>
          </li>
          <li className="mr-3 mb-2 flex items-center">
            <Phone className="w-4 h-4 mr-1 text-gray-500" />
            <span className="text-gray-600 dark:text-gray-300">13611111234</span>
          </li>
        </ul>

        <ul className="link-list text-left flex md:items-center flex-wrap">
          <li className="mr-3 mb-2 flex items-center">
            <Globe className="w-4 h-4 mr-1 text-gray-500" />
            <a href="https://vikingz.me" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-800" rel="noreferrer">个人网站</a>
          </li>
          <li className="mr-3 mb-2 flex items-center">
            <Github className="w-4 h-4 mr-1 text-gray-500" />
            <a href="https://github.com/vikingmute" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-800" rel="noreferrer">Github</a>
          </li>
          <li className="mr-3 mb-2 flex items-center">
            <Linkedin className="w-4 h-4 mr-1 text-gray-500" />
            <a href="https://linkedin.com/vikingmute" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-800" rel="noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
