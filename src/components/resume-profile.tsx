import Image from "next/image";
import { Mail, Phone, Github, MessageCircleMore, Twitter, Send } from "lucide-react";
import Profile from "@/static/avator.png";

export function ResumeProfile() {
  return (
    <header className='resume-header md:flex md:items-center md:justify-between md:flex-row-reverse mb-4'>
      <div className='relative w-28 h-28 rounded-full overflow-hidden mx-auto md:mx-0'>
        <Image src={Profile} alt='Profile' fill className='object-cover' />
      </div>

      <div className='header-info md:text-left text-center mt-2 md:mt-0'>
        <h1 className='text-xl mb-2 text-gray-800 dark:text-white font-semibold'>苏业纯 (xieyezi)</h1>
        <h2 className='mb-2 text-gray-600 dark:text-gray-300'>高级前端工程师/架构师 | 7年工作经验 | 男 | 29岁 | 重庆</h2>

        <ul className='link-list text-left flex md:items-center flex-wrap'>
          <li className='mr-3 mb-2 flex items-center'>
            <Github className='w-4 h-4 mr-1 text-gray-500' />
            <a href='https://github.com/xieyezi' target='_blank' className='text-gray-600 dark:text-gray-300 hover:text-gray-800' rel='noreferrer'>
              Github
            </a>
          </li>
          <li className='mr-3 mb-2 flex items-center'>
            <Twitter className='w-4 h-4 mr-1 text-gray-500' />
            <a href='https://x.com/xieyezi666' target='_blank' className='text-gray-600 dark:text-gray-300 hover:text-gray-800' rel='noreferrer'>
              Twitter
            </a>
          </li>
          <li className='mr-3 mb-2 flex items-center'>
            <Send className='w-4 h-4 mr-1 text-gray-500' />
            <a href='https://t.me/xieyezi666' target='_blank' className='text-gray-600 dark:text-gray-300 hover:text-gray-800' rel='noreferrer'>
              Telegram
            </a>
          </li>
          <li className='mr-3 mb-2 flex items-center'>
            <MessageCircleMore className='w-4 h-4 mr-1 text-gray-500' />
            <a href='https://www.helloimg.com/i/2025/04/03/67ee9eb6239ba.png' target='_blank' className='text-gray-600 dark:text-gray-300 hover:text-gray-800' rel='noreferrer'>
              xieyezi-syc
            </a>
          </li>
          {/* <li className='mr-3 mb-2 flex items-center'>
            <Phone className='w-4 h-4 mr-1 text-gray-500' />
            <span className='text-gray-600 dark:text-gray-300'>17783887443</span>
          </li> */}
          <li className='mr-3 mb-2 flex items-center'>
            <Mail className='w-4 h-4 mr-1 text-gray-500' />
            <a href='mailto:1435398529@qq.com' className='text-gray-600 dark:text-gray-300 hover:text-gray-800'>
              1435398529@qq.com
            </a>
          </li>
          {/* <li className='mr-3 mb-2 flex items-center'>
            <Globe className='w-4 h-4 mr-1 text-gray-500' />
            <a href='https://www.xieyezi.info/' target='_blank' className='text-gray-600 dark:text-gray-300 hover:text-gray-800' rel='noreferrer'>
              个人网站
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
}
