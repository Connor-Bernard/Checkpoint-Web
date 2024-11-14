import Base from './Base.js';

export const INTERNAL_SERVICE_ERROR_STATUS = 500;

export class InternalServiceError extends Base {
    constructor(message, stack = undefined) {
        super(message, INTERNAL_SERVICE_ERROR_STATUS, stack);
        this.name = 'internalServiceError';
    }
}
