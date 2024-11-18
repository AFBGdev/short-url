import axiosInstance from './axios-instance';
import { type CreateLinkRequestType } from '../types/requests-types';
import { type LinkType } from '../types/types';
import { createLinkResponseAdapter, getLinksResponseAdapter } from '../adapters/links.adapters';

const ENDPOINT = '/links';

export const getLinks = async (): Promise<LinkType[]> => {
  try {
    const response = await axiosInstance.get(`${ENDPOINT}`);

    return getLinksResponseAdapter(response.data.data);

  } catch (error: any) {
    throw new Error(error.response.data.error.message);
  }
}

export const createLink = async (newLink: CreateLinkRequestType): Promise<LinkType> => {
  try {
    const response = await axiosInstance.post(`${ENDPOINT}`, newLink);

    return createLinkResponseAdapter(response.data.data);

  } catch (error: any) {
    throw new Error(error.response.data.error.message);
  }
}

export const deleteLink = async (linkId: LinkType['id']): Promise<string> => {
  try {
    const response = await axiosInstance.delete(`${ENDPOINT}/${linkId}`);

    return response.data.data

  } catch (error: any) {
    throw new Error(error.response.data.error.message);
  }
}