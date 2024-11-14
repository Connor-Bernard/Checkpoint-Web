import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import genericErrorHandler from './lib/helpers/genericErrorHandler.js';

import { connectDB, disconnectDB } from './db/conn.js';
import { MINUTE } from './lib/helpers/time.js';
import { PORT } from './config/env.js';
import { apiRouter } from './api/index.js';

const RATE_LIMIT_MINUTES = 15;

process.on('SIGINT', async () => {
    try {
        await disconnectDB();
        process.exit(0);
    } catch (_) {
        process.exit(1);
    }
});

const app = express().use(
    helmet.contentSecurityPolicy({
        directives: {
            // eslint-disable-next-line quotes
            defaultSrc: ["'self'"],
        },
    }),
    cors(),
    rateLimit({
        windowMs: RATE_LIMIT_MINUTES * MINUTE,
        limit: 100,
        message: 'Too many requests from this IP, please try again in an hour!',
    }),
    express.json(),
    express.urlencoded({ extended: true }),
);

apiRouter(app);

app.use(genericErrorHandler);

async function startServer() {
    await connectDB();
    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server started in port ${PORT}`);
    });
}

startServer();
