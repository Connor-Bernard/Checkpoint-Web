import dotenv from 'dotenv';

dotenv.config();

export const {
    PORT = 8080,
    MONGO_URI,
} = process.env;

if (!MONGO_URI) {
    throw new Error('MONGO_URI is not defined');
}
