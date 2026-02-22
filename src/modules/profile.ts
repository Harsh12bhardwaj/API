import { ProfileData } from '../types';
import { apiFetch } from '../utils/fetch';
import { AuresError } from '../error';

export async function loadProfile(
    username: string,
    options: {
        baseURL?: string;
        includeEmail?: boolean;
    } = {}
): Promise<ProfileData> {
    const { baseURL = 'https://aures.dev/api/public', includeEmail = false } = options;

    const select = ['username', 'avatar', 'skills'];
    if (includeEmail) select.push('email');

    const data = await apiFetch<ProfileData>(`/${username}`, {
        baseURL,
        select,
    });

    return data;
}