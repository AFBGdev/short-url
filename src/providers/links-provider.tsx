import { useEffect, useState, type ReactElement } from 'react';
import { LinksContext } from '../contexts/links-context';
import { type CreateLinkFormValuesType, type LinkType } from '../types/types';
import { createLink, deleteLink, getLinks } from '../api/links.requests';

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

  const removeLink = async (linkId: LinkType['id']) => {
    try {
      const deletedLinkId = await deleteLink(linkId)

      console.log('Deleted: ', deletedLinkId)
      alert(`Link ${deletedLinkId} was deleted!`)

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <LinksContext.Provider value={{
      links,
      createNewShortUrlLink,
      removeLink,
    }}>
      { children }
    </LinksContext.Provider>
  )
}