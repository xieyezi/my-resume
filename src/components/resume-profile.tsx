"use client";

import Image from "next/image";
import { Mail, Phone, Github, MessageCircleMore, Twitter, Send } from "lucide-react";
import { useTranslations } from 'next-intl';
import Profile from "@/static/avator.png";

export function ResumeProfile() {
  const t = useTranslations('profile');

  return (
    <header className='resume-header md:flex md:items-center md:justify-between md:flex-row-reverse mb-4'>
      <div className='relative w-28 h-28 rounded-full overflow-hidden mx-auto md:mx-0'>
        <Image src={Profile} alt='Profile' fill className='object-cover' />
      </div>

      <div className='header-info md:text-left text-center mt-2 md:mt-0'>
        <h1 className='text-xl mb-2 text-gray-800 dark:text-white font-semibold'>{t('name')}</h1>
        <h2 className='mb-2 text-gray-600 dark:text-gray-300'>{t('title')}</h2>

        <ul className='link-list text-left flex md:items-center flex-wrap'>
          <li className='mr-3 mb-2 flex items-center'>
            <Github className='w-4 h-4 mr-1 text-gray-500' />
            <a href='https://github.com/xieyezi' target='_blank' className='text-gray-600 dark:text-gray-300 hover:text-gray-800' rel='noreferrer'>
              {t('github')}
            </a>
          </li>
          <li className='mr-3 mb-2 flex items-center'>
            <Twitter className='w-4 h-4 mr-1 text-gray-500' />
            <a href='https://x.com/xieyezi666' target='_blank' className='text-gray-600 dark:text-gray-300 hover:text-gray-800' rel='noreferrer'>
              {t('twitter')}
            </a>
          </li>
          <li className='mr-3 mb-2 flex items-center'>
            <Send className='w-4 h-4 mr-1 text-gray-500' />
            <a href='https://t.me/xieyezi666' target='_blank' className='text-gray-600 dark:text-gray-300 hover:text-gray-800' rel='noreferrer'>
              {t('telegram')}
            </a>
          </li>
          <li className='mr-3 mb-2 flex items-center'>
            <MessageCircleMore className='w-4 h-4 mr-1 text-gray-500' />
            <a href='https://www.helloimg.com/i/2025/04/03/67ee9eb6239ba.png' target='_blank' className='text-gray-600 dark:text-gray-300 hover:text-gray-800' rel='noreferrer'>
              {t('wechat')}
            </a>
          </li>
          <li className='mr-3 mb-2 flex items-center'>
            <Mail className='w-4 h-4 mr-1 text-gray-500' />
            <a href='mailto:1435398529@qq.com' className='text-gray-600 dark:text-gray-300 hover:text-gray-800'>
              {t('email')}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
