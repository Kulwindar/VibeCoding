import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import swagger from '@fastify/swagger';
import { config } from './config/env.ts';
import { connectDatabase } from './config/database.ts';
import { initializeRedis } from './config/redis.ts';
import { errorHandler } from './middleware/errorHandler.ts';
import { authenticate } from './middleware/authenticate.ts';
import { logger } from './lib/logger.ts';
import { registerUserRoutes } from './modules/users/index.ts';

const app = Fastify({
  logger: logger,
});

// Register plugins
await app.register(cors, {
  origin: ['http://localhost:5174', 'http://localhost:5173', 'http://localhost:3000'],
});

await app.register(swagger, {
  swagger: {
    info: {
      title: 'ETEMS API',
      description: 'Enterprise Employee Travel & Expense Management System',
      version: '1.0.0',
    },
    servers: [{ url: '/api/v1' }],
  },
});

await app.register(jwt, {
  secret: {
    private: config.jwt.privateKey,
    public: config.jwt.publicKey,
  },
  sign: {
    algorithm: config.jwt.algorithm,
    expiresIn: config.jwt.accessExpiration,
  },
});

// Middleware
app.addHook('onError', errorHandler);
app.decorate('authenticate', authenticate);

// Routes placeholder
app.get('/api/v1/health', async (request, reply) => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

// Register route modules
await registerUserRoutes(app);

// Start server
const start = async () => {
  try {
    // Connect to databases
    await connectDatabase();
    await initializeRedis();

    await app.listen({ host: config.api.host, port: config.api.port });
    logger.info(`Server listening at http://${config.api.host}:${config.api.port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
