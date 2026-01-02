export class AuresError extends Error {
    constructor(
        public status: number,
        public statusText: string,
        public data?: any
    ) {
        super(`${status}: ${statusText}`);
        this.name = 'AuresError';
    }
}

export function isAuresError(error: any): error is AuresError {
    return error instanceof AuresError;
}