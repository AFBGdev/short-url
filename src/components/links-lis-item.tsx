import { IoCopyOutline } from 'react-icons/io5';
import { LinkType } from '../types/types';
import { BsArrowReturnRight } from 'react-icons/bs';

interface LinksLisItemProps {
  link: LinkType
}

export function LinksLisItem({ link }: LinksLisItemProps) {
  return (
    <li
    className='w-full flex flex-col'
    >
      <div className='w-full flex gap-2'>
        <a href={link.redirectUrl} target="_blank" rel="noopener noreferrer">
          {link.slug}
        </a>

        <IoCopyOutline />
      </div>

      <div className='w-full flex gap-2'>
        <BsArrowReturnRight size={25} />

        <a
          className='max-w-60 sm:max-w-72 truncate text-sm text-gray-400 underline-offset-4 transition-all hover:text-gray-700 hover:underline'
        >
          {link.targetUrl}
        </a>
      </div>
    </li>
  )
}