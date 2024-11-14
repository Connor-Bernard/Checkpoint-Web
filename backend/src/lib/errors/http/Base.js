export default class Base extends Error {
    /**
     * Base HTTP error class to be used for extension.
     *
     * @param {string} message
     * @param {number} status
     * @param {string} stack
     */
    constructor(message, status = 500, stack = undefined) {
        super('baseHttpError', message, stack);
        this.status = status;
    }
}
