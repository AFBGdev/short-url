import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LinksList } from '../components/links-list';
import { type LinkType } from '../types/types';

describe('LinksLisItem', () => {
  it('renders the LinksList component', async () => {
    render(<LinksList data={[]} />)

    await screen.getByRole('list')
  })

  it('show "No links found!" h5 when data props is equals to []', async () => {
    render(<LinksList data={[]} />)

    await screen.getByRole('heading', { level: 5, name: 'No links found!'})
  })

  it('renders li elements when receives links data', async () => {
    const data: LinkType[] = [
      {
        id: '7126216e-1809-4cce-bd53-3c61a7745cf7',
        targetUrl: 'expample target',
        slug: 'example slug',
        redirectUrl: 'example redirectUrl',
      }
    ]

    render(<LinksList data={data} />)

    await screen.getByRole('listitem')
  })
})