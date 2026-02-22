import { Certificate } from '../types';
import { apiFetch } from '../utils/fetch';

export async function loadCertificates(
  username: string,
  options: { baseURL?: string } = {}
): Promise<Certificate[]> {
  const { baseURL = 'https://aures.dev/api/public' } = options;

  const data = await apiFetch<{ certificates?: Certificate[] }>(`/${username}`, {
    baseURL,
    select: ['certificates'],
  });

  return data.certificates || [];
}