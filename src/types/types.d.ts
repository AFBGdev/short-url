export type LinkType = {
  id: string,
  targetUrl: string,
  slug: string,
  redirectUrl: string
}

export type LinksContextType = {
  links: LinkType[]
}