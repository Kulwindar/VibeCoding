import Redis from 'ioredis';
import { config } from './env.js';
import { logger } from '../lib/logger.js';

let redis: Redis;

export async function initializeRedis() {
  try {
    redis = new Redis({
      host: config.redis.host,
      port: config.redis.port,
      password: config.redis.password,
      retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000);
        return delay;
      },
    });

    redis.on('error', (err) => logger.error('Redis error:', err));
    redis.on('connect', () => logger.info('Connected to Redis'));
    redis.on('disconnect', () => logger.info('Disconnected from Redis'));

    await redis.ping();
    logger.info('Redis initialized');
  } catch (error) {
    logger.error('Failed to initialize Redis:', error);
    throw error;
  }
}

export function getRedisClient() {
  if (!redis) {
    throw new Error('Redis client not initialized');
  }
  return redis;
}

export async function closeRedis() {
  if (redis) {
    await redis.disconnect();
  }
}
