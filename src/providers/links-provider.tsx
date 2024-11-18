import { useEffect, useState, type ReactElement } from 'react';
import { LinksContext } from '../contexts/links-context';
import { type CreateLinkFormValuesType, type LinkType } from '../types/types';
import { createLink, deleteLink, getLinks } from '../api/links.requests';
import { useNotify } from '../hooks/useNotify';

interface LinksProviderProps {
  children: ReactElement
}

export function LinksProvider({ children }: LinksProviderProps) {
  const [links, setLinks] = useState<LinkType[]>([]);
  const { notify } = useNotify()

  useEffect(() => {
    fetchLinks();
  }, [])

  const fetchLinks = async () => {
    try {
      const links = await getLinks();

      setLinks(links);

    } catch (error) {
      console.error(error);
    }
  }

  const createNewShortUrlLink = async (newLink: CreateLinkFormValuesType) => {
    try {
      const createdLink = await createLink(newLink);

      fetchLinks();
      notify(`New ${createdLink.slug} short url created!`);

    } catch (error) {
      console.error(error);
    }
  }

  const removeLink = async (linkId: LinkType['id']) => {
    try {
      const deletedLinkId = await deleteLink(linkId)

      fetchLinks();
      notify(`Link ${deletedLinkId} was deleted!`)

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