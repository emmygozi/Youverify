import debug from 'debug';
import mongoose from 'mongoose';
import { config } from 'dotenv';

const appDebugger = debug('app');
config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });

        appDebugger('@MongoDB connected!!');
    } catch (err) {
        appDebugger('Failed to connect to MongoDB', err);
    }
};

connectDB();