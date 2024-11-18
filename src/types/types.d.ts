export type LinkType = {
  id: string,
  targetUrl: string,
  slug: string,
  redirectUrl: string
}

export type LinksContextType = {
  links: LinkType[],
  createNewShortUrlLink: (newLink: { target: LinkType['targetUrl']; }) => Promise<void>,
  removeLink: (linkId) => Promise<void>,
}

export type CreateLinkFormValuesType = {
  target: LinkType['targetUrl'],
}