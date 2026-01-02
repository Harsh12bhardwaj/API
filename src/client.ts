import {
    UserData,
    AuresConfig,
    AuresOptions,
    SelectableFields,
    ProfileData,
    Project,
    Experience,
    Award,
    Certificate
} from './types';
import { apiFetch } from './utils/fetch';
import { AuresError } from './error';

export class AuresClient {
    private username: string;
    private config: Required<AuresConfig>;

    constructor(options: AuresOptions) {
        this.username = options.username;
        this.config = {
            baseURL: 'https://aures.vishok.me/api/public',
            timeout: 10000,
            cache: true,
            headers: {},
            ...options.config,
        };
    }

    async get<T = UserData>(select: SelectableFields[] = ['username', 'avatar']): Promise<T> {
        const headers = {
            ...this.config.headers,
            ...(this.config.cache ? {} : { 'Cache-Control': 'no-cache' })
        };

        return apiFetch<T>(`/${this.username}`, {
            baseURL: this.config.baseURL,
            timeout: this.config.timeout,
            select,
            headers,
            cache: this.config.cache ? 'default' : 'no-store'
        });
    }

    async load(): Promise<UserData> {
        return this.get([
            'username',
            'avatar',
            'email',
            'projects',
            'experience',
            'awards',
            'certificates',
            'skills'
        ]);
    }

    async getProfile(): Promise<ProfileData> {
        const data = await this.get(['username', 'avatar', 'email', 'skills']);
        return {
            username: data.username,
            avatar: data.avatar,
            email: data.email,
            skills: data.skills,
        };
    }

    async getProjects(): Promise<Project[]> {
        const data = await this.get<{ projects?: Project[] }>(['projects']);
        return data.projects || [];
    }

    async getExperience(): Promise<Experience[]> {
        const data = await this.get<{ experience?: Experience[] }>(['experience']);
        return data.experience || [];
    }

    async getAwards(): Promise<Award[]> {
        const data = await this.get<{ awards?: Award[] }>(['awards']);
        return data.awards || [];
    }

    async getCertificates(): Promise<Certificate[]> {
        const data = await this.get<{ certificates?: Certificate[] }>(['certificates']);
        return data.certificates || [];
    }

    async getSkills(): Promise<string[]> {
        const data = await this.get<{ skills?: string[] }>(['skills']);
        return data.skills || [];
    }

    static create(username: string, config?: AuresConfig): AuresClient {
        return new AuresClient({ username, config });
    }
}

export { AuresError };