import { LinkType } from '../types/types';
import { LinksLisItem } from './links-lis-item';

interface LinksListProps {
  data: LinkType[]
}

export function LinksList({ data }: LinksListProps) {
  return (
    <ul className='w-full flex flex-col gap-2'>
      {data.length === 0
        ? (<h5 className='text-2xl font-bold'>No links found!</h5>)
        : (
          data.map((link) => (<LinksLisItem key={link.id} link={link} />))
        )
      }
    </ul>
  )
}