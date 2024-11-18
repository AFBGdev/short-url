import { IoCopyOutline, IoTrashOutline } from 'react-icons/io5';
import { LinkType } from '../types/types';
import { BsArrowReturnRight } from 'react-icons/bs';
import { useLinks } from '../hooks/useLinks';

interface LinksLisItemProps {
  link: LinkType
}

export function LinksLisItem({ link }: LinksLisItemProps) {
  const { removeLink } = useLinks();

  const handleCopyToClipboard = (linkToCopy: string) => {
    navigator.clipboard.writeText(linkToCopy);
  }

  return (
    <li
    className='w-full flex flex-col rounded-xl border border-gray-200 bg-white py-3 px-4 shadow-lg gap-1.5'
    >
      <div className='w-full flex gap-3 justify-start items-center'>
        <a
          className='font-semibold text-gray-800 hover:text-black'
          href={link.redirectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.slug}
        </a>

        <button
          className='rounded-full transition-all duration-75 border border-gray-200 bg-gray-50 hover:scale-100 hover:bg-gray-100 active:bg-gray-100 p-1.5'
          type='button'
          onClick={() => handleCopyToClipboard(link.redirectUrl)}
        >
          <IoCopyOutline size={18} />
        </button>

        <button
          className='rounded-full transition-all duration-75 border border-gray-200 bg-gray-50 hover:scale-100 hover:bg-gray-100 active:bg-gray-100 p-1.5'
          type='button'
          onClick={() => removeLink(link.id)}
        >
          <IoTrashOutline size={18} />
        </button>
      </div>

      <div className='w-full flex gap-2'>
        <BsArrowReturnRight className='text-gray-400' size={18} />

        <a
          className='max-w-60 sm:max-w-72 truncate text-sm text-gray-400 underline-offset-4 transition-all hover:text-gray-700 hover:underline cursor-pointer'
          href={link.targetUrl}
          target="_blank"
        >
          {link.targetUrl}
        </a>
      </div>
    </li>
  )
}