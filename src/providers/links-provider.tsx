import { useEffect, useState, type ReactElement } from 'react';
import { LinksContext } from '../contexts/links-context';
import { type CreateLinkFormValuesType, type LinkType } from '../types/types';
import { createLink, getLinks } from '../api/links.requests';

interface LinksProviderProps {
  children: ReactElement
}

export function LinksProvider({ children }: LinksProviderProps) {
  const [links, setLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    getLinks()
      .then(data => {
        setLinks(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const createNewShortUrlLink = async (targetUrl: CreateLinkFormValuesType) => {
    try {
      const newLink = targetUrl

      const createdLink = await createLink(newLink);

      console.log('Created: ', JSON.stringify(createdLink))
      alert('New Link created!')

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <LinksContext.Provider value={{
      links,
      createNewShortUrlLink,
    }}>
      { children }
    </LinksContext.Provider>
  )
}