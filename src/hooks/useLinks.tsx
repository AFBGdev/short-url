import { useContext } from 'react';
import { LinksContext } from '../contexts/links-context';

export function useLinks() {
  const context = useContext(LinksContext);

  if (!context) {
    throw new Error("LinksContext must be used within a LinksProvider");
  }

  return context
}