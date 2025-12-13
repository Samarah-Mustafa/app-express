/**
 * Custom error class for repository-level failures.
 */
export class RepositoryError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'RepositoryError';
    }
}