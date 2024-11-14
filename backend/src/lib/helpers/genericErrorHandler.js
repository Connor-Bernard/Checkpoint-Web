import { INTERNAL_SERVICE_ERROR_STATUS } from '../errors/http/index.js';

/**
 * Generic Error Handler
 *
 * @param {Error} err
 * @param {express.Request} _req
 * @param {express.Response} res
 * @param {express.NextFunction} _next
 * @returns {express.Response}
 */
export default function genericErrorHandler(err, _req, res) {
    console.error(err);

    const message = 'Internal Server Error';
    if (!err.status) {
        return res.status(INTERNAL_SERVICE_ERROR_STATUS).json({
            error: { message },
        });
    }

    return res.status(err.status).json({
        error: {
            message: err.message || message,
        },
    });
}
