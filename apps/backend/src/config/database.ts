import mongoose from 'mongoose';
import { config } from './env.js';
import { logger } from '../lib/logger.js';

export async function connectDatabase() {
  try {
    const uri = config.database.uri;
    await mongoose.connect(uri);
    logger.info('Connected to MongoDB');
  } catch (error) {
    logger.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

export async function disconnectDatabase() {
  try {
    await mongoose.disconnect();
    logger.info('Disconnected from MongoDB');
  } catch (error) {
    logger.error('Failed to disconnect from MongoDB:', error);
    throw error;
  }
}
