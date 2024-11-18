export type CreateLinkRequestType = {
  targetUrl: string
}

export type CreateLinkResponseType = 
{
  id: string,
  target_url: string,
  slug: string,
  redirect_url: string,
  updated_at: string,
  created_at: string
}