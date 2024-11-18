export type ApiLinkType = {
  id: string,
  target_url: string,
  slug: string,
  redirect_url: string,
  updated_at: string,
  created_at: string
}

export type GetLinksResponseType = ApiLinkType[]

export type CreateLinkRequestType = {
  targetUrl: string
}

export type CreateLinkResponseType = ApiLinkType