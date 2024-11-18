import { useEffect, useState, type ReactElement } from 'react';
import { LinksContext } from '../contexts/links-context';
import { type LinkType } from '../types/types';
import { getLinks } from '../api/links.requests';

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

  return (
    <LinksContext.Provider value={{
      links
    }}>
      { children }
    </LinksContext.Provider>
  )
}