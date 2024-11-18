export type LinkType = {
  id: string,
  targetUrl: string,
  slug: string,
  redirectUrl: string
}

export type LinksContextType = {
  links: LinkType[],
  createNewShortUrlLink: (targetUrl) => Promise<void>
}

export type CreateLinkFormValuesType = {
  target: LinkType['targetUrl'],
}