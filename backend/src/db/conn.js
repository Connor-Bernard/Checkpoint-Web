/* eslint-disable no-console */
import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connected to MongoDB.');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error; // Re-throw to handle it in the calling code
    }
};

export const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('Successfully disconnected from MongoDB.');
    } catch (error) {
        console.error('MongoDB disconnection error:', error);
        throw error;
    }
};

// Add connection event listeners
mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});


