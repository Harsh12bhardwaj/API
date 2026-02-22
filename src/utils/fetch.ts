import { AuresError } from "../error";

const DEFAULT_BASE_URL = 'https://aures.dev';
const DEFAULT_TIMEOUT = 10000;

export async function apiFetch<T>(
    endpoint: string,
    options: {
        baseURL?: string;
        timeout?: number;
        select?: string[];
        headers?: Record<string, string>;
        cache?: RequestCache;
    } = {}
): Promise<T> {
    const {
        baseURL = DEFAULT_BASE_URL,
        timeout = DEFAULT_TIMEOUT,
        select = [],
        headers = {},
        cache = 'default'
    } = options;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const searchParams = new URLSearchParams();
        if (select.length > 0) {
            searchParams.set('select', select.join(','));
        }

        const url = `${baseURL}${endpoint}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                ...headers,
            },
            cache,
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            let errorData;
            try {
                errorData = await response.json();
            } catch {
                errorData = { message: response.statusText };
            }
            throw new AuresError(response.status, response.statusText, errorData);
        }

        return await response.json();
    } catch (error: any) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new AuresError(408, 'Request timeout');
        }
        throw error;
    }
}