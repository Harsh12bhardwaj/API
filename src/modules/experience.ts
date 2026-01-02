import { Experience } from '../types';
import { apiFetch } from '../utils/fetch';

export async function loadExperience(
    username: string,
    options: { baseURL?: string } = {}
): Promise<Experience[]> {
    const { baseURL = 'https://aures.vishok.me/api/public' } = options;

    const data = await apiFetch<{ experience?: Experience[] }>(`/${username}`, {
        baseURL,
        select: ['experience'],
    });

    return data.experience || [];
}