export interface ProfileData {
    username: string;
    avatar: string;
    name?: string;
    bio?: string;
    email?: string;
    location?: string;
    website?: string;
    social?: {
        github?: string;
        twitter?: string;
        linkedin?: string;
        [key: string]: string | undefined;
    };
    skills?: string[];
}

export interface Project {
    name: string;
    desc: string;
    url?: string;
    tech?: string[];
}

export interface Experience {
    title: string;
    company: string;
    description: string;
    startDate: string;
    endDate?: string;
}

export interface Award {
    title: string;
    issuer: string;
    description: string;
    date: string;
}

export interface Certificate {
    title: string;
    platform: string;
    description: string;
    url?: string;
    completedOn: string;
    role?: string;
}

export interface UserData {
    username: string;
    avatar: string;
    email?: string;
    projects?: Project[];
    experience?: Experience[];
    awards?: Award[];
    certificates?: Certificate[];
    skills?: string[];
}

export interface AuresConfig {
    baseURL?: string;
    timeout?: number;
    cache?: boolean;
    headers?: Record<string, string>;
}

export interface AuresOptions {
    username: string;
    config?: AuresConfig;
}

export type SelectableFields =
    | 'username'
    | 'avatar'
    | 'email'
    | 'projects'
    | 'experience'
    | 'awards'
    | 'certificates'
    | 'skills';

export interface FetchOptions {
    select?: SelectableFields[];
    headers?: Record<string, string>;
    cache?: RequestCache;
}