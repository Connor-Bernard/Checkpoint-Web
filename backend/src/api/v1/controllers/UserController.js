import { User } from '../models/index.js';

export const userController = {
    /**
     * Get all users.
     *
     * @param {express.Request} _req
     * @param {express.Response} res
     */
    getUsers: async (_req, res) => {
        const users = await User.find();
        return res.send(users);
    },
};
