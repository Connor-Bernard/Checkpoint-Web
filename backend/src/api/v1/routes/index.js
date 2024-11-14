import { Router } from 'express';

import { userRouter } from './UserRouter.js';

/**
 * @param {express.Express} app
 */
const v1Router = Router();

v1Router.use('/user', userRouter);

export default v1Router;
