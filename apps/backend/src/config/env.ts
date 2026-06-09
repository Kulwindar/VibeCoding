import { z } from 'zod';
import * as dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // API
  API_PORT: z.coerce.number().default(3000),
  API_HOST: z.string().default('0.0.0.0'),
  
  // MongoDB
  MONGODB_URI: z.string(),
  MONGODB_TEST_URI: z.string().optional(),
  
  // Redis
  REDIS_HOST: z.string().default('localhost'),
  REDIS_PORT: z.coerce.number().default(6379),
  REDIS_PASSWORD: z.string().optional(),
  
  // JWT
  JWT_PRIVATE_KEY: z.string(),
  JWT_PUBLIC_KEY: z.string(),
  JWT_ALGORITHM: z.string().default('RS256'),
  JWT_ACCESS_EXPIRATION: z.string().default('15m'),
  JWT_REFRESH_EXPIRATION: z.string().default('30d'),
  
  // CORS
  CORS_ORIGIN: z.string().default('http://localhost:5173'),
});

const env = envSchema.parse(process.env);

export const config = {
  app: {
    nodeEnv: env.NODE_ENV,
  },
  api: {
    port: env.API_PORT,
    host: env.API_HOST,
  },
  database: {
    uri: env.MONGODB_URI,
    testUri: env.MONGODB_TEST_URI || env.MONGODB_URI,
  },
  redis: {
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
    password: env.REDIS_PASSWORD,
  },
  jwt: {
    privateKey: env.JWT_PRIVATE_KEY,
    publicKey: env.JWT_PUBLIC_KEY,
    algorithm: env.JWT_ALGORITHM,
    accessExpiration: env.JWT_ACCESS_EXPIRATION,
    refreshExpiration: env.JWT_REFRESH_EXPIRATION,
  },
  cors: {
    origin: env.CORS_ORIGIN,
  },
};
