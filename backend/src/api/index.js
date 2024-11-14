import { Router } from 'express';

import v1Router from './v1/routes/index.js';

/**
 * @param {express.Express} app
 */
export function apiRouter(app) {
    const router = Router();

    /**
     * Sample Route
     */
    router.get('/ping', (_req, res) => {
        return res.send('pong');
    });

    /**
     * Import Other Routes
     */
    app.use('/', router);
    app.use('/api/v1', v1Router);
};
