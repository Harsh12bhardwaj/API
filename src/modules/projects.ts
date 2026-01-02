import { Project } from '../types';
import { apiFetch } from '../utils/fetch';

export async function loadProjects(
    username: string,
    options: { baseURL?: string } = {}
): Promise<Project[]> {
    const { baseURL = 'https://aures.vishok.me/api/public' } = options;

    const data = await apiFetch<{ projects?: Project[] }>(`/${username}`, {
        baseURL,
        select: ['projects'],
    });

    return data.projects || [];
}