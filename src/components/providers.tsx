import { type ReactElement } from 'react';
import { LinksProvider } from '../providers/links-provider';

interface ProvidersProps {
  children: ReactElement
}

export function Providers({ children }: ProvidersProps) {
  return (
    <LinksProvider>
      { children }
    </LinksProvider>
  )
}