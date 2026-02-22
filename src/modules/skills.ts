import { apiFetch } from '../utils/fetch';

export async function loadSkills(
    username: string,
    options: { baseURL?: string } = {}
): Promise<string[]> {
    const { baseURL = 'https://aures.dev/api/public' } = options;

    const data = await apiFetch<{ skills?: string[] }>(`/${username}`, {
        baseURL,
        select: ['skills'],
    });

    return data.skills || [];
}