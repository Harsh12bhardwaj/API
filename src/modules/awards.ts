import { Award } from '../types';
import { apiFetch } from '../utils/fetch';

export async function loadAwards(
    username: string,
    options: { baseURL?: string } = {}
): Promise<Award[]> {
    const { baseURL = 'https://aures.dev/api/public' } = options;

    const data = await apiFetch<{ awards?: Award[] }>(`/${username}`, {
        baseURL,
        select: ['awards'],
    });

    return data.awards || [];
}