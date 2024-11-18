import { type GetLinksResponseType, type CreateLinkResponseType } from '../types/requests-types';
import { type LinkType } from '../types/types';

export function getLinksResponseAdapter(response: GetLinksResponseType): LinkType[] {
  const links = response.map((responseLink) => {
    return {
      id: responseLink.id,
      targetUrl: responseLink.target_url,
      slug: responseLink.slug,
      redirectUrl: responseLink.redirect_url
    }
  });

  return links;

}

export function createLinkResponseAdapter(response: CreateLinkResponseType): LinkType {
  return {
    id: response.id,
    targetUrl: response.target_url,
    slug: response.slug,
    redirectUrl: response.redirect_url
  }
}